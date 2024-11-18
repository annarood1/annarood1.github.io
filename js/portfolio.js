// Javascript called by the portfolio page

// Even - Odd list
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
} else {
    console.error("Couldn't find numbers list.")
}

// Footer
const currentDate = new Date();

const footerCC = document.getElementById("copyright");

year = currentDate.getFullYear();
console.log(year);
footerCC.innerHTML = "&copy; Anna Rood, " + year + "<span id='right'>BY-NC-SA 4.0</span>";

console.log(currentDate);