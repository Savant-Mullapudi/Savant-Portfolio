function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function openMultiple(urls) {
    for (const url of urls) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }