const modalBtn = $('.modal-btn');
const closeBtn = $('.close-btn');
const modalOverlay = $('.modal-overlay');

modalBtn.click(function(){
    modalOverlay.addClass('open-modal');
})
closeBtn.click(function(){
    modalOverlay.removeClass('open-modal');
})

