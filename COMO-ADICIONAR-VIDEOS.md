# Como adicionar vídeos ao portfólio

1. Coloque os vídeos (MP4, MOV do iPhone, WhatsApp… qualquer um) na pasta **`videos-novos`**.
2. Dê **duplo clique em `ADICIONAR-VIDEOS.bat`**.
3. Pronto: os vídeos são comprimidos, ganham capa automática, entram na galeria e o site é publicado em ~1 minuto.

- Os originais ficam guardados em `videos-originais` (não vão para o site).
- Os vídeos aparecem na ordem em que foram adicionados (`reel-01`, `reel-02`…).
- Para remover um vídeo: apague `assets/reels/reel-NN.mp4` e `.jpg`, rode o `.bat` de novo.
- Requer ffmpeg (já instalado neste PC; em outro: `winget install Gyan.FFmpeg`).
