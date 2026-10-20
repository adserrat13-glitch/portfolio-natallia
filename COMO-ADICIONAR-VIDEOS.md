# Como adicionar vídeos ao portfólio

1. Coloque os vídeos (MP4, MOV do iPhone, WhatsApp… qualquer um) na pasta **`videos-novos`**.
2. Dê **duplo clique em `ADICIONAR-VIDEOS.bat`**.
3. Pronto: os vídeos são comprimidos, ganham capa automática, entram na galeria e o site é publicado em ~1 minuto.

- Os originais ficam guardados em `videos-originais` (não vão para o site).
- Dê aos vídeos o **nome do cliente + número** (ex.: `BRUNA1.mp4`, `BRUNA2.mp4`, `BRUNA3.mp4`). Eles aparecem como "BRUNA 1", "BRUNA 2"… e a galeria fica em **ordem de nome**, com os vídeos de cada cliente juntos (3 por cliente = uma linha).
- Para remover um vídeo: apague `assets/reels/nome.mp4` e `nome.jpg` (ex.: `bruna-2`) e rode o `.bat` de novo.
- Requer ffmpeg (já instalado neste PC; em outro: `winget install Gyan.FFmpeg`).
