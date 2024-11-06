// function hello(){
//    return 
//    " hello world"
// }
// // // return
// // let go = hello()
// // console.log(go)


// let Names = ["sarfarz","hafeez","raheem","ali"]

// Names.map(function(_name ){

//     return 

//     console.log(_name)
// })


// function add(a ,b){
//     let x = a + "-" + b
//     return x;
// }

// let b = add("sarafarz", "Fida")

// console.log(b)

// function subject(eng,urdu,sci,physic,bio){
//     let a = eng + urdu + sci + physic + bio
//     return a; 
// }
// let b = subject(50,70,90,23.,34)
// console.log(b)// function totalMarks(tm){
//     let c = (tm / 500 * 100)
//     return c;
// }

// let d = totalMarks(b)

// console.log(d + " %")


// let _name = ["jimin", "junjlook" ,"kim taehyung" ,"suga"]

// let arrays = []
//  _name.forEach(add)


//  function add(value , index){
//     console.log(index , value)
    
//  }

// ATM

// var user = prompt("Enter Your UserName")
// var password = prompt("Enter Your password")

// var userPassword = [22,33,44,55,66,]
// var userNames = ["ali","hafeez","ramzan","mubrak","sarafarz"]
// let flag = false
// for(let i of userNames){
    //     //if it is true
    //     if(user == i && password === ){
        //         //re-assign flag value
        //         flag= true
        //         alert("welcome")
        
//     }
// }
// // if the value is false
// if(!flag){
    //     alert("not allowed")
    // }

//     const user = prompt("enter user name")

//     const password = Number(prompt("enter user password"))

//    let userlist = [
//     {
//     name: "ali",
//     password: 12345
//     }
//    ]

//    for(let i =0 ; i <= userlist.length -1; i++){

//        if(user == userlist && password == userlist){
//         alert("welcome")
//        }
//    }

//    for (const key in userlist) {
//     if(user === userlist[key] ){
//         console.log("hi")
//         if(password === userlist[key]){

//             alert("allowed")
//         }
//     }
//    }
// let flag = false

// for of is use for arrays and string
// var  a = ["sarfarz", "ali", "hafeez","shoaib"]
// for(let x of a){
//     console.log(x)
// }

// // For in loop use for object and arrays || string
// var b = {
//     _name: "sarfarz",
//     password: 2244
// }
// for(let x in b){
//     console.log(x ,  b[x])
// }



let user = prompt("search your name here")

let names = ["ali", "bob", "jami", "john", "sami"]
// let flag  = false


if( names.includes(user)){
    alert("allowed")
}else{
    alert("not allowed")
}


// for(let i of names){
//     if(user === i ){
//         flag = true
//          alert("welcome")
//          //break;
//     }
// }
// if(!flag){
//     alert("not allowed")
// }


