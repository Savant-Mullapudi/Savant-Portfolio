function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function openMultiple(urls) {
  if (!Array.isArray(urls) || urls.length === 0) return;
  
  window.open(urls[0], '_blank', 'noopener,noreferrer');
  
  for (let i = 1; i < urls.length; i++) {
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = urls[i];
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, i * 250); 
  }
}