// This code should run in a browser environment

// First event listener for red color
let redColor = document.querySelector(".red");
let cartButtonRed = document.querySelector("#button");
let itemTagRed = document.querySelector(".tag");
let imageRed = document.querySelector(".product-image");

redColor.addEventListener('click', () =>{
    cartButtonRed.style.backgroundColor = "red";
    itemTagRed.style.backgroundColor = "red";
    imageRed.style.backgroundImage = 'url("./imgred-benz.webp.jpeg")';
});

// Second event listener for grey color
let greyColor = document.querySelector(".gray");
let cartButtonGrey = document.querySelector("#button");
let itemTagGrey = document.querySelector(".tag");
let imageGrey = document.querySelector(".product-image");

greyColor.addEventListener('click', () => {
    cartButtonGrey.style.backgroundColor = "gray";
    itemTagGrey.style.backgroundColor = "gray";
    imageGrey.style.backgroundImage = 'url("./Mercedez Benz c300 2022 grey.jpeg")';
});




redColor.addEventListener('click', () =>{
    cartButtonblack.style.backgroundColor = "black";
    itemTagblack.style.backgroundColor = "black";
    imageblack.style.backgroundImage = 'url("./imgred-benz.webp.jpeg")';
});









