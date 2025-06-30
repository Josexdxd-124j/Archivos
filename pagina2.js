for (let i = 0; i < 40; i++) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = `
    <svg viewBox="0 0 32 29.6" width="20" height="20">
      <path fill="pink" d="M23.6,0c-3.4,0-6.4,2.2-7.6,5.3C14.8,2.2,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4
        c0,9.8,16,21.2,16,21.2s16-11.4,16-21.2C32,3.8,28.2,0,23.6,0z"/>
    </svg>
  `;
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  heart.style.opacity = 0.6 + Math.random() * 0.4;
  heart.style.transform = `scale(${0.6 + Math.random() * 0.8}) rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(heart);
}