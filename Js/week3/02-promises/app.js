//callback
// setTimeout(function() { myFunction("I love You !!!"); }, 1000);
// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }
//Promise
// let myPromise = new Promise(function(resolve, reject){
//     setTimeout(function() { resolve("I love You !!!"); }, 1000);
// });
// myPromise.then(function(value){
//     document.getElementById("demo").innerHTML = value;
// });
 
 
 
// function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myCallback(req.responseText);
//       } else {
//         myCallback("Error: " + req.status);
//       }
//     }
//     req.send();
//   }
//   getFile(myDisplayer);
 

// //   promise
//  let req = new XMLHttpRequest();
//  req.open('GET', "car.html");
//  req.onload = function() {
//     if (req.status == 200) {
//         myCallback(req.responseText);
//     } else {
//         myCallback("Error: " + req.status);
//     }
//  }
//  req.send();

//  getFile(myDisplayer);


 function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  function getFile(myCallback) {
     let req = new XMLHttpRequest();
     req.open('GET', "../../week2/04-To-do/index.html");
     req.onload = function() {
       if (req.status == 200) {
         myCallback(req.responseText);
       } else {
         myCallback("Error: " + req.status);
       }
     }
     req.send();
   }
   getFile(myDisplayer);
  
  
