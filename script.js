// select modal-btn, modal-overlay, close-btn
// Listen for click events on modal-btn and close-btn
// When user clicks modal-btn add .open-modal to model-overlay
// When user clicks close-btn remove .open-modal from model-overlay

const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');
const modalOverlay = document.querySelector('.modal-overlay');

modalBtn.addEventListener('click',function(){
    modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click',function(){
    modalOverlay.classList.remove('open-modal');
})