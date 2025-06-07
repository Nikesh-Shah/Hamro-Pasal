const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const boxes = document.querySelectorAll('.box');
let currentIndex = 0;

function updateVisibility() {
    boxes.forEach((box, index) => {
        if (index >= currentIndex && index < currentIndex + 3) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

function moveBox(direction) {
    if (direction == 'prev' && currentIndex > 0) {
        currentIndex -= 1;
    } else if (direction == 'next' && currentIndex < boxes.length - 3) {
        currentIndex += 1;
    }else{
        currentIndex = 0;
    }   
    updateVisibility();
}

prevButton.addEventListener('click', () => moveBox('next'));
nextButton.addEventListener('click', () => moveBox('next'));

updateVisibility(); // Initially display the first 3 boxes
