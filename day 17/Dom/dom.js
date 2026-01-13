
// All about DOM Manipulation will be here in this file
welcome.textContent = "Hello, welcome to DOM Manipulation!";
welcome.style.color = "blue";
welcome.style.fontSize = "24px";
welcome.style.fontWeight = "bold";

const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph added to the DOM.";
document.body.appendChild(newParagraph);

const changeColorButton = document.getElementById('changeColorButton');
changeColorButton.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}