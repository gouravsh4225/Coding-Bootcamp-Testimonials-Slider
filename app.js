const allSlideCardsElement  = document.querySelectorAll('.card');
let currentSlideIndex = 0;
showSlideElement();

function showSlideElement(index = 0) {
    for(let i=0;i<allSlideCardsElement.length;i++) {
        allSlideCardsElement[i].style.display = "none";
    }
    allSlideCardsElement[index].style.display = "flex";
}
function onPrevious() {
    currentSlideIndex--;
    if(currentSlideIndex > 0 || currentSlideIndex === 0) {
        showSlideElement(currentSlideIndex)
    }
    if(currentSlideIndex < 0) {
        currentSlideIndex = allSlideCardsElement.length - 1;
        showSlideElement(currentSlideIndex)
    }
}

function onNext() {
    currentSlideIndex++;
    if(currentSlideIndex === allSlideCardsElement.length) {
        currentSlideIndex = 0;
        showSlideElement(currentSlideIndex)
    }
    if(currentSlideIndex < allSlideCardsElement.length) {
        
        showSlideElement(currentSlideIndex)
    }
}