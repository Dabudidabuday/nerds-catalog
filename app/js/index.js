'use strict';

console.log ('he11o wor1d');

let feedbackButton = document.querySelector (".button__write-us");
let overlay = document.querySelector (".overlay");
let modal = document.querySelector (".modal");
let modalCloseButton = document.querySelector (".modal-close");

feedbackButton.addEventListener ("click", function () {
    overlay.style.display="block";
    modal.style.display="block";
});

modalCloseButton.addEventListener ("click", function () {
    overlay.style.display="none";
    modal.style.display="none";
})
