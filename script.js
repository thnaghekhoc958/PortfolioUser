// Animation nhẹ khi cuộn tới card
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      card.classList.add('animate');
    }
  });
}); 