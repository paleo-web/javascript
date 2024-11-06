let form = document.getElementById("form")
let name = document.getElementById("name")
let password = document.getElementById("password")
let btn = document.getElementById("btn")



form.addEventListener("submit" , (e)=>{
        e.preventDefault()

        let user ={
            userName: name.value,
            userpassword: password.value,
        }

        localStorage.setItem("name",user)
        let local =localStorage.getItem("name")

        if(userName.value == local || userpassword.value == local){
            alert("welcome")
        }
})