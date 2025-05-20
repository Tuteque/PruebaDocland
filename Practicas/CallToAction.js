(function () {
  // 1. Crear contenedor principal
  const container = document.createElement('div');
  container.className = 'custom-ayuda-container';

  // 2. Crear bloque de texto
  const textBlock = document.createElement('div');
  textBlock.className = 'custom-ayuda-text';

  const heading = document.createElement('h2');
  heading.textContent = 'CALL TO ACTION';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'Nunca es tarde para formar parte de la solucion. Entra en acción colaborando con la entidad de tu preferencia.';

  textBlock.appendChild(heading);
  textBlock.appendChild(paragraph);
  container.appendChild(textBlock);

  // 3. Crear grid de videos
  const grid = document.createElement('div');
  grid.className = 'custom-ayuda-grid';

  const ongData = [
    {
      href: 'https://docland.uscreen.io/pages/oxfam-intermon',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/OXFAM INTERMÓN_LOGO_V02.png',
      alt: 'Logo Oxfam Intermón',
    },
    {
      href: 'https://docland.uscreen.io/pages/accion-hambre',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/ACCIÓN CONTRA EL HAMBRE_LOGO.png',
      alt: 'Accion contra el hambre',
    },
    {
      href: 'https://docland.uscreen.io/pages/greenpeace',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/GREENPEACE_LOGO.png',
      alt: 'GreenPeace',
    },
    {
      href: 'https://docland.uscreen.io/pages/accion',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/AYUDA EN ACCIÓN_LOGO.png',
      alt: 'ayuda en accion',
    },
    {
      href: 'https://docland.uscreen.io/pages/amnistia',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/AMNISTÍA INTERNACIONAL_LOGO.png',
      alt: 'Logo Amnistía Internacional',
    },
    {
      href: 'https://docland.uscreen.io/pages/plan-internacional',
      src: 'https://coserver-docland.cuevadelmero.duckdns.org/assets/ong/PLAN INTERNACIONAL_LOGO.png',
      alt: 'Logo Plan Internacional',
    },
  ];

  // 4. Agregar cada ONG
  ongData.forEach(ong => {
    const item = document.createElement('div');
    item.className = 'video-item';

    const link = document.createElement('a');
    link.href = ong.href;

    const img = document.createElement('img');
    img.className = 'logo_ong';
    img.src = ong.src;
    img.alt = ong.alt;

    link.appendChild(img);
    item.appendChild(link);
    grid.appendChild(item);
  });

  container.appendChild(grid);
  document.body.appendChild(container);

  // 5. Agregar estilos
  const styles = `
    .avatar_name {
        background: white;
        color: black;
        padding: 0.1rem 0.3rem;
        border-radius: 2rem;
        font-size: 0.7rem;
    }
    .custom-ayuda-logo {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .custom-ayuda-logo img {
        width: 300px;
        display: block;
    }
    .custom-ayuda-container {
        background-color: black;
        color: white;
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
        max-width: 1200px;
        margin: auto;
    }
    .custom-ayuda-text h2 {
        text-transform: uppercase;
        margin-bottom: 10px;
    }
    .custom-ayuda-text {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
    }
    .custom-ayuda-text p {
        line-height: 1.6;
        color: #ccc;
        margin-top: 30px;
        margin-bottom: 30px;
        max-width: 800px;
        text-align: justify;
    }
    .custom-ayuda-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }
    .video-item {
        position: relative;
        text-align: center;
        display: flex;
        gap: 15px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .video-item p {
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        margin-bottom: 5px;
        color: #ddd;
        top: 2rem;
    }
    .video-item a {
        display: block;
        justify-content: center;
        padding: 2rem;
    }
    .logo_ong {
        width: 60%;
        object-fit: cover;
        object-position: center;
        display: block;
        transition: transform 0.3s ease;
        background-color: black;
        margin: 0 auto;
        filter: grayscale(100%);
        opacity: 0.7;
        transition: opacity 0.3s ease;
    }
    .logo_ong:hover {
        transform: scale(1.05);
        opacity: 1;
    }
    @media screen and (max-width: 900px) {
        .custom-ayuda-grid {
            grid-template-columns: 1fr;
        }
    }
    .custom-style-avatar-box {
        display: flex;
        flex-direction: column;
        gap: 3px;
    }
    #website-links {
        margin-left: unset !important;
    }
    .text-docland {
        font-size: 1.8rem;
        margin-right: 2rem;
        font-weight: 1000 !important;
    }
    body {
        background: black !important;
    }
    .modal {
        background: rgba(0, 0, 0, 0.74);
        z-index: 9999;
        height: 100%;
    }
  `;

  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
})();
