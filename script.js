</> JavaScript

document.querySelector("form").addEventListener("submit", function(e){

e.preventDefault();

alert("Thank you for contacting Blue Skite. We will respond shortly.");

this.reset();

});