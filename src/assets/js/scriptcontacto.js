function toggleFlipCard() {
    const flipCard = document.querySelector('.flip-card');
    const envelope = document.querySelector('.envelope');
    flipCard.innerHTML = envelope.classList.toggle('active') ? 'Reset' : 'Animate';
  }