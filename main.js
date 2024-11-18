const currentDate = new Date();

// GREETING CARD
const greetingBox = document.getElementById("greetingbox");
const greetingText = document.getElementById("greetingtext");

// If else statements used to change values.
function greeting() {
    const hour = currentDate.getHours();
    let message = '';
    let style = '';  

    if (hour <= 4) {
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

    // Adjusts values of HTML and outputs confirmation to console.
    console.log(message);
    greetingText.textContent = message;
    greetingBox.classList.add(style);
}
// Wait until after the document has loaded to run greeting
document.addEventListener('DOMContentLoaded', () => {
        greeting();
})
