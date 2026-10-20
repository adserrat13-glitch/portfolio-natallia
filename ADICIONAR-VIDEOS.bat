@echo off
REM Duplo clique: otimiza os vídeos de videos-novos\ e publica no site.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0otimizar-videos.ps1" -Publicar
pause
