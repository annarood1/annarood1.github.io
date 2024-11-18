// Variables to be used throughout all time related script.
const currentDate = new Date();

// GREETING CARD      
const greetingBox = document.getElementById("greetingbox");
const greetingText = document.getElementById("greetingtext");

// If else statements used to change values.
function greeting() {
    let hour = currentDate.getHours()
    if (hour <= 4 ) {
        message = 'GET YOUR ASS TO BED!';
        style = 'night';    
    } else if (hour <= 11) {
        message = 'Good morning!';
        style = 'morning';
    } else if (hour <= 17) {
        message = 'Good afternoon!';
        style = 'afternoon';
    } else {
        message = 'Good evening!';
        style = 'evening';
    }
    // Adjusts values of html and outputs to console.
    console.log(message);
    greetingText.textContent = message;
    greetingBox.classList.add(style);
}
