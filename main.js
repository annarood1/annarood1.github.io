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
        message = 'GET YOUR BUTT TO BED! &#127772;';
        style = 'night';
    } else if (hour <= 11) {
        message = 'Good morning! &#127774;';
        style = 'morning';
    } else if (hour <= 17) {
        message = 'Good afternoon! $#127763;';
        style = 'afternoon';
    } else {
        message = 'Good evening! $#127768;';
        style = 'evening';
    }

    // Adjusts values of HTML and outputs confirmation to console.
    console.log(message);
    greetingText.innerHTML = message;
    greetingBox.classList.add(style);
}

const footerCC = document.getElementById("copyright");

year = currentDate.getFullYear();
console.log(year);
footerCC.innerHTML = "&copy; Anna Rood, " + year + "<span id='right'>BY-NC-SA 4.0</span>";

console.log(currentDate);

// Wait until after the document has loaded to run greeting
document.addEventListener('DOMContentLoaded', () => {
        greeting();
})
