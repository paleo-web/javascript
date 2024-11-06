let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")



let IsStudentExist = JSON.parse(localStorage.getItem("student") )
box1.innerHTML = IsStudentExist._name 
box2.innerHTML = IsStudentExist._Email


let ProfilePic = document.getElementById("PofilePic")
ProfilePic.src = localStorage.getItem("image")

