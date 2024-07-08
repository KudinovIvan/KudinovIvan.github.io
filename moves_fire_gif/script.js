document.addEventListener('DOMContentLoaded', function () {
    const column1Cards = document.querySelectorAll('#column1 .card');
    const column2Cards = document.querySelectorAll('#column2 .card');
    let currentCardIndex = 0;
    let isColumn1Active = true;
    function flashCards() {
        column1Cards.forEach(card => card.classList.remove('active'));
        column2Cards.forEach(card => card.classList.remove('active'));
        if (isColumn1Active) {
            column1Cards[currentCardIndex].classList.add('active');
        } else {
            column2Cards[currentCardIndex].classList.add('active');
            currentCardIndex = (currentCardIndex + 1) % column1Cards.length;
        }
        isColumn1Active = !isColumn1Active;
        setTimeout(flashCards, 1000);
    }
    flashCards();
});