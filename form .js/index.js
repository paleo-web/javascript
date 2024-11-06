// let form = document.querySelector("form");
// let name = document.querySelector("#name");
// let select = document.querySelector("#Select");

// form.addEventListener("submit", check);

// function check(e) {
//   e.preventDefault();
//   // if(name.value.length === 0){
//   //     alert("please enter your last name")
//   //     name.focus()
//   //     name.style.backgroundColor = "yellow"
//   // }else{
//   //     name.style.backgroundColor = "white"
//   // }

//   if (select.selectedIndex === 0) {
//     alert("enter a city name");
//   }

//   // localStorage.setItem("city names" ,select)
//   // localStorage.getItem("city names")
// }
// var radios = document.getElementsByName("r1");
//   console.log(radios)

// let count=0
// function validateRadios(event) {
//     event.preventDefault()
//   var radios = document.getElementsByName("r1");


//   for (var i = 0; i < radios.length; i++) {
//     if (radios[i].checked) {

//         return true;  // it procced
//     }
// }
// console.log(count)
// alert("Please check one."); 
//    return false;    // it,s stoped!

   
// } 

// console.log( true === false)



// let form = document.querySelector("form")

// form.addEventListener("submit", validateRadios)

// function validateRadios() {
//     var radios = document.getElementsByName("r1");
//     // e.preventDefault();
//     for (var i = 0; i < radios.length; i++) {
//       if (radios[i].checked) {
//         alert("checked")
//         // console.log(radios[i].textContent)
//         return true;
//       }else{
//         alert("Please check one.");

//     console.log("not running")
//     return false;
//     }
//     }

//   }



let form = document.getElementById("form")
let inputField = document.getElementById("inputField")
let btn = document.getElementById("btn")

form.addEventListener("click", Btn)

function Btn(e){
    e.preventDefault();


    // for(let i =0; i < inputField.lengt; i++){
    //     console.log("hello")
    // }
}

// console.log(btn)