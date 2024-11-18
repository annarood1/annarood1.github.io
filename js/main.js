// This file contains all javascript called by the site.
// I've isolated the production code to several individual documents for troubleshooting and performance sake.

const currentDate = new Date();

// GREETING CARD
const greetingBox = document.getElementById("greetingbox");
const greetingText = document.getElementById("greetingtext");

// If else statements used to change values.
if (greetingBox) {
    function greeting() {
        const hour = currentDate.getHours(); // Use `const` as `hour` doesn't change
        let message = ''; // Declare `message`
        let style = '';   // Declare `style`

        if (hour <= 4) {
            message = 'GET YOUR BUTT TO BED! &#127772;';
		    style = 'night';
	    } else if (hour <= 11) {
		    message = 'Good morning! &#127774;';
		    style = 'morning';
	    } else if (hour <= 17) {
		    message = 'Good afternoon! &#127763;';
		    style = 'afternoon';
	    } else {
		    message = 'Good evening! &#127768;';
		    style = 'evening';
        }

        // Adjusts values of HTML and outputs to console.
        console.log(hour + ":" + message + style);
        greetingText.innerHTML = message;
        greetingBox.classList.add(style);
    }
} else {
    console.error("Couldn't find the greeting box.");
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
const alertBtn = document.getElementById("btn-alert");
const theCreature = document.getElementById("the-creature");

// Set initial state, the creature is hidden.
let isCreatureReleased = false;

// Define state-dependent messages
const messages = {
	default: {
		hover: 'Are you sure you want to release the creature?',
		normal: 'Release the creature?',
	},
	released: {
		hover: 'QUICK! GET RID OF THE CREATURE!',
		normal: 'Force the creature back in its cage?',
	},
	alert: {
		release: "THE CREATURE HAS BEEN RELEASED!\nRUN!!!",
		cage: "THE CREATURE HAS BEEN CAGED!\nYOU'RE SAFE!",
	},
};

// Update button text based on state
function updateButtonText(isHover) {
	const stateMessages = isCreatureReleased ? messages.released : messages.default;
	alertBtn.textContent = isHover ? stateMessages.hover : stateMessages.normal;
    alertBtn.classList.toggle("creature-active");
    console.log("Button hovered.")
}

// Set initial button text
updateButtonText(false);

// Add event listeners
alertBtn.addEventListener('mouseover', () => updateButtonText(true));
alertBtn.addEventListener('mouseout', () => updateButtonText(false));

alertBtn.addEventListener('click', () => {
	alert(isCreatureReleased ? messages.alert.cage : messages.alert.release);
	theCreature.classList.toggle("hidden");
	isCreatureReleased = !isCreatureReleased; // Toggle state
	updateButtonText(false); // Update text after state change
	console.log("Button interacted with.");
});

// For loop
const forLoopList = document.getElementById("numbers");
if (forLoopList) {
    for (let i = 1; i <= 12; i = i + 1) {
        let listItem = document.createElement("li");
        if (i % 2 == 1) {
            listItem.textContent = "Odd";
            console.log(i + " is odd.");
        } else {
            listItem.textContent = "Even";
            console.log(i + " is even.");
        };
        numbers.appendChild(listItem)
    }
} 