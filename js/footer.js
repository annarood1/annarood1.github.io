// Footer called by the resume page.
const currentDate = new Date();

const footerCC = document.getElementById("copyright");

year = currentDate.getFullYear();
console.log(year);
footerCC.innerHTML = "&copy; Anna Rood, " + year + "<span id='right'>BY-NC-SA 4.0</span>";

console.log(currentDate);