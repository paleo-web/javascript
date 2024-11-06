let username = document.getElementById("user-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let btn = document.getElementById("signup")
let signupForm =document.getElementById("form")
let ProfilePic = document.getElementById("PofilePic")
let InputFile = document.getElementById("input-file")

// image seaction

// InputFile.onchange = function(){
//     ProfilePic.src = URL.createObjectURL(InputFile.files[0])
// }

InputFile.addEventListener("change", function(event){
    var image = event.target.files[0]
    var reader = new FileReader()

    if(image){
        reader.readAsDataURL(image)
    }

    reader.addEventListener("load", function(){
        localStorage.setItem("image", reader.result)
        ProfilePic.src = localStorage.getItem("image")
        
    })

    // let set = 
    
})


// end image seaction


signupForm.addEventListener("submit", function(e){
e.preventDefault()
HandleSignUp()

})



function HandleSignUp(){

let UserIdenty ={
    _name: username.value,
    _Email: email.value,
    _Password: password.value,
    UserInput: InputFile.value,
} 

if(UserIdenty._name === "" || UserIdenty._Email === "" || UserIdenty._Password === "" || UserIdenty.UserInput === "" ){
    alert("please fill your form")
    return
}


    //saveing in local stroge
localStorage.setItem("student" ,JSON.stringify(UserIdenty))

    //redirct page in SignIn

    window.location.href = "./SignIn.html"
    history.pushState(null, "", "./SignIn.html")
}