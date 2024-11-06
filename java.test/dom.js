//dom   // document   object  model

// let h1= document.getElementById("h1")
// let body = document.getElementById("body")

// let btn= document.getElementById("btn")
// let box= document.getElementById("box")

// let w= "500px"
// let h= "500px"
// box.addEventListener("click", function(){
//     // h1.style.backgroundColor = "blue"
//     // body.style.backgroundColor = "black"
//     // btn.style.backgroundColor= "yellow"
// // box.style.display = "none"i
// box.style.width = w
// box.style.height = h
// })
//   let body = document.getElementById("body")
// let btn = document.getElementById("btn")
// let div =document.getElementById("main")
// let ul = document.getElementById("ul")
// btn.addEventListener("click" , function(){
//     body.style.backgroundColor = "brown"
//     div.style.backgroundColor = "blue"
//     ul.style.backgroundColor = "yellow"
//     btn.style.backgroundColor = "green"

// }) 






let footer = document.getElementById ("footer")
let button = document.getElementById("btn")
let openbutton = document.getElementById("open")


button.addEventListener("click" , function(){
footer.style.display = "none"
// openbutton.style.display = "block"
})

openbutton.addEventListener("click" , function(){
  footer.style.display = "block"
  // button.style.display = "none"
})

