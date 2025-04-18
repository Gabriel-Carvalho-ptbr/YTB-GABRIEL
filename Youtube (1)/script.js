
const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/5xrc2RTKg4s/hqdefault.jpg",
      title: "AVENTURAS EM MINECRAFT",
      views: "8mil visualizações",
      date: "há 2 anos atrás",
      channel: "CANAL MINECRAFT"
    },
    {
      thumbnail: "https://img.youtube.com/vi/a99tqNoU1J0/hqdefault.jpg",
      title: "AVENTURA MINECRAFT",
      views: "15mil visualizações",
      date: "há 3 meses atrás",
      channel: "Os CARAS"
    },
    {
      thumbnail: "https://img.youtube.com/vi/FNoBLlDdmjU/hqdefault.jpg",
      title: "Abrimos um HOTEL",
      views: "12mil visualizações",
      date: "há 5 meses atrás",
      channel: "Os CARAS"
    },
    {
      thumbnail: "https://img.youtube.com/vi/DfNcDIyBWdE/hqdefault.jpg",
      title: "Get You",
      views: "7mil visualizações",
      date: "há 6 meses atrás",
      channel: "Daniel Caesar"
    },
    {
      thumbnail: "https://img.youtube.com/vi/J6jSapYJ4FE/hqdefault.jpg",
      title: "Até o Próximo Carnaval VOl.2 (Full EP)",
      views: "20mil visualizações",
      date: "há 1 ano atrás",
      channel: "Sotam"
    },
    {
      thumbnail: "https://img.youtube.com/vi/qLYuWC9hDQA/hqdefault.jpg",
      title: "MInecrat EP 3",
      views: "5mil visualizações",
      date: "há 2 meses atrás",
      channel: "Nozes"
    },
    {
      thumbnail: "https://img.youtube.com/vi/WWdns0_LW_M/hqdefault.jpg",
      title: "MInecraft EP 2",
      views: "13mil visualizações",
      date: "há 8 meses atrás",
      channel: "Nozes"
    },
    {
      thumbnail: "https://img.youtube.com/vi/Js4iBKn1sew/hqdefault.jpg",
      title: "Minecraft EP !",
      views: "25mil visualizações",
      date: "há 1 mês atrás",
      channel: "Nozes"
    }
  ];
  

  const recommendationsContainer = document.getElementById('recommendations');
  
  videos.forEach(video => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('recommended-video');
    
    videoElement.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" class="thumb" />
      <div class="video-details">
        <h4>${video.title}</h4>
        <div class="video-stats">${video.views} &bull; ${video.date}</div>
        <div class="channel-info">
          <div class="channel-avatar"></div>
          <div class="channel-name">${video.channel}</div>
        </div>
      </div>
    `;
    
    recommendationsContainer.appendChild(videoElement);
  });
  