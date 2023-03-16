const follower = document.querySelector('.cursor-follower');
let posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

const delay = 75;

function animate() {
  requestAnimationFrame(animate);
  posX += (mouseX - posX) / delay;
  posY += (mouseY - posY) / delay;
  follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
}

animate();

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

document.addEventListener('mouseleave', () => {
  follower.classList.add('is-hidden');
});

document.addEventListener('mouseenter', () => {
  follower.classList.remove('is-hidden');
});
