const cars = new Map ([
    ["Tayota",1000],
    ["Dodge",20],
    ["Bmw",150],

]);
let number = cars.get("Bmw")
document.getElementById("demo").innerHTML = number;