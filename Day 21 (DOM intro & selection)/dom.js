//getElementById example

// HTML: <div id="total-dislay"></div>

const el = document.getElementById("total-dsilay");


//getElementBytagName example
const heading = document.getElementsByTagName("h1");

//getElementByClassName example
const classEl = document.getElementsByClassName("class-name");

//querySelector example
const queryEl = document.querySelector(".class-name");
const cont = document.querySelector("#total-dislay");

//querySelectorAll example
const queryAllEl = document.querySelectorAll(".class-name");


// Manipulating the selected elements

//Navigation
//parentNode
const parent = cont.parentNode;