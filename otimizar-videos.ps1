# ══════════════════════════════════════════════
#  Otimiza vídeos novos para o portfólio.
#  1. Coloque os vídeos (mp4, mov, etc.) em  videos-novos/
#  2. Rode este script (ou dê duplo clique em ADICIONAR-VIDEOS.bat)
#  Cada vídeo vira assets/reels/reel-NN.mp4 (leve, 720p) + reel-NN.jpg (capa),
#  o original é guardado em videos-originais/ (fora do Git) e
#  js/videos-data.js é regenerado automaticamente.
# ══════════════════════════════════════════════
param([switch]$Publicar)

$ErrorActionPreference = 'Stop'
$root   = $PSScriptRoot
$novos  = Join-Path $root 'videos-novos'
$backup = Join-Path $root 'videos-originais'
$reels  = Join-Path $root 'assets\reels'
New-Item -ItemType Directory -Force $novos, $backup, $reels | Out-Null

# Localiza o ffmpeg (PATH ou instalação via winget)
$ffmpeg = (Get-Command ffmpeg -ErrorAction SilentlyContinue).Source
if (-not $ffmpeg) {
  $ffmpeg = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet" -Recurse -Filter ffmpeg.exe -ErrorAction SilentlyContinue |
    Select-Object -First 1 -ExpandProperty FullName
}
if (-not $ffmpeg) { throw 'ffmpeg não encontrado. Instale com: winget install Gyan.FFmpeg' }

function Next-Number {
  $nums = Get-ChildItem $reels -Filter 'reel-*.mp4' | ForEach-Object {
    if ($_.BaseName -match '^reel-(\d+)$') { [int]$Matches[1] }
  }
  if ($nums) { [int](($nums | Measure-Object -Maximum).Maximum) + 1 } else { 1 }
}

$exts = '.mp4', '.mov', '.m4v', '.webm', '.avi', '.mkv'
$inputs = Get-ChildItem $novos -File | Where-Object { $exts -contains $_.Extension.ToLower() } | Sort-Object Name

foreach ($f in $inputs) {
  $name = 'reel-{0:D2}' -f (Next-Number)
  $mp4  = Join-Path $reels "$name.mp4"
  $jpg  = Join-Path $reels "$name.jpg"
  Write-Host "→ $($f.Name)  =>  $name.mp4"

  # H.264 720p (lado menor), qualidade boa e arquivo pequeno, início rápido no navegador
  & $ffmpeg -hide_banner -loglevel error -y -i $f.FullName `
    -vf "scale='if(gt(iw,ih),-2,720)':'if(gt(iw,ih),720,-2)',fps=30" `
    -c:v libx264 -preset slow -crf 28 -profile:v high -pix_fmt yuv420p `
    -c:a aac -b:a 96k -ac 2 -movflags +faststart $mp4
  if ($LASTEXITCODE -ne 0) { Write-Warning "Falha ao converter $($f.Name)"; continue }

  # Capa (frame em 1s)
  & $ffmpeg -hide_banner -loglevel error -y -ss 1 -i $mp4 -frames:v 1 -q:v 5 $jpg

  Move-Item $f.FullName (Join-Path $backup $f.Name) -Force
  Write-Host ("   {0:N1} MB -> {1:N1} MB" -f ($f.Length / 1MB), ((Get-Item $mp4).Length / 1MB))
}

# Regenera js/videos-data.js a partir dos arquivos em assets/reels
$lines = Get-ChildItem $reels -Filter 'reel-*.mp4' | Sort-Object Name | ForEach-Object {
  $n = [int]($_.BaseName -replace '^reel-', '')
  $poster = if (Test-Path (Join-Path $reels "$($_.BaseName).jpg")) { "`"$($_.BaseName).jpg`"" } else { 'null' }
  "  { file: `"$($_.Name)`", title: `"Reel $n`", poster: $poster }"
}
$js = @"
/* ══════════════════════════════════════════════
   Manifesto dos vídeos da galeria (assets/reels).
   GERADO AUTOMATICAMENTE por otimizar-videos.ps1 — não edite à mão.
   ══════════════════════════════════════════════ */

const REELS_DATA = [
$($lines -join ",`n")
];
"@
[IO.File]::WriteAllText((Join-Path $root 'js\videos-data.js'), $js + "`n", (New-Object Text.UTF8Encoding $false))
Write-Host "videos-data.js atualizado ($($lines.Count) vídeos)."

if ($Publicar -and $inputs) {
  git -C $root add assets/reels js/videos-data.js
  git -C $root commit -m "Adicionar $($inputs.Count) vídeo(s)"
  git -C $root push
  Write-Host 'Enviado! O Vercel publica em ~1 minuto.'
}
