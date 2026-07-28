// Welcome Message

window.onload = function(){

    alert("Welcome to Zahidul Hasan's Website!");

};

// Alert Button

document.getElementById("alertButton").onclick = function(){

    alert("Thank you for visiting my website!");

};

// Change Background Color

document.getElementById("colorButton").onclick = function(){

    document.body.style.backgroundColor = "#D6EAF8";

};

// Form Validation

document.getElementById("contactForm").onsubmit = function(event){

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    if(name === "" || email === ""){

        alert("Please enter your Name and Email.");

        event.preventDefault();

    }

};

// Array

let skills = [

    "HTML",

    "CSS",

    "JavaScript",

    "Git",

    "GitHub",

    "AI Tools"

];

let list = document.getElementById("skillsList");

for(let i = 0; i < skills.length; i++){

    let item = document.createElement("li");

    item.textContent = skills[i];

    list.appendChild(item);

}

// Object

let laptop = {

    brand: "Dell",

    model: "Inspiron",

    price: "$800"

};

document.getElementById("productInfo").innerHTML =

"<strong>Brand:</strong> " + laptop.brand +

"<br><strong>Model:</strong> " + laptop.model +

"<br><strong>Price:</strong> " + laptop.price;
