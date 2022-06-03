/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
/*----- event listeners -----*/
// becasue of poisition it will be processed before any HTML in the page
/* The Array.from() method returns an array from any object with a length property.
*/
window.addEventListener('domContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');

    resetButton.addEventListener('click, resetBoard');
})
/*----- functions -----*/