var currentCardIndex = 0;
var miniCards;

document.addEventListener('DOMContentLoaded', function() {
  miniCards = Array.from(document.querySelectorAll("#mini-card1, #mini-card2, #mini-card3, #mini-card4, #mini-card5, #mini-card6, #mini-card7, #mini-card8, #mini-card9, #mini-card10"));
});

function showNextMiniCard() {
  miniCards[currentCardIndex].classList.remove("active");
  currentCardIndex = (currentCardIndex + 1) % miniCards.length;
  miniCards[currentCardIndex].classList.add("active");
}

function showPreviousMiniCard() {
  miniCards[currentCardIndex].classList.remove("active");
  currentCardIndex = (currentCardIndex - 1 + miniCards.length) % miniCards.length;
  miniCards[currentCardIndex].classList.add("active");
}

function togglePopup(cardId) {
  var card = document.getElementById(cardId);
  var popupOpen = document.body.classList.contains("popup-open");

  if (!popupOpen) {
    document.body.classList.add("popup-open");
    card.style.display = "block";
  } else {
    // Check if the clicked target is the zoomed card content
    var clickedElement = event.target || window.event.target;
    if (clickedElement && clickedElement.classList.contains("zoomed-card")) {
      document.body.classList.remove("popup-open");
      card.style.display = "none";
    } else if (clickedElement && clickedElement.classList.contains("cycling")) {
      // Prevent cycling when clicking on the cycling buttons
      return;
    }
  }
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains("popup")) {
    document.body.classList.remove("popup-open");
    event.target.style.display = "none";
  }
});
