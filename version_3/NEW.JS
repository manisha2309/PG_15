// If you want to toggle the flip on click
const flipCard = document.querySelector('.flip-card');
flipCard.addEventListener('click', function() {
  this.classList.toggle('flipped');
});
