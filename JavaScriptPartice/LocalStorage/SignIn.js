let username = document.getElementById("user-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btn = document.getElementById("signin")
let signInForm =document.getElementById("form")



signInForm.addEventListener("submit", function(e){
e.preventDefault()
HandleSignIn()

})



function HandleSignIn(){

    let Email = email.value
    let Password =password.value

let IsStudentExist = JSON.parse(localStorage.getItem("student") )

if(Email === IsStudentExist._Email && Password === IsStudentExist._Password){

    alert(IsStudentExist._name + " welcome")
    window.location.href = "./form.html"
    history.pushState(null, "", "./form.html")
    
}else{
    alert("please create your account")
}

}