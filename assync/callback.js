// console.log(" I ");

// console.log(" eat ");
// console.log(" Ice Cream ");

// console.log("I");

// console.log(" I ");
// // // This will be shown after 2 seconds

// setTimeout(()=>{
//   console.log("eat")
// },2000)

// console.log("Ice Cream")

// console.log("playing football")

// function one() {
//   console.log("step 1");
// }

// function two() {
//   console.log("step 2");
// }

// two();
// one();

function one (callback){
    console.log("step 1 is completed please call step 2");
    callback() // calling function
 }

function two(){
  console.log("step 2 is called")
}
one(two)
// relationship between customer and us

// let order= (call_production)=>{
// console.log("order placed please call production")
// call_production()
// }

// let production = ()=>{
// console.log("order received starting production")
// }
// order(production)

let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

// let order= (fruitName, call_production)=>{
//     //setTimeOut
//     setTimeout(()=>{
//     console.log(`order placed ${stocks.Fruits[fruitName]} was selected please call production`)
//     call_production()
// },2000)
// }

// let production = ()=>{
// setTimeout(()=>{
//     console.log("order received starting production")
//     setTimeout(()=>{
//         console.log("fruits has been choped");
//         setTimeout(()=>{
//             console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
//         },1000)
//     },2000)
// },1000)
// }
// order(0,production)
// let is_shop_open = true;
// let order = (time, production)=>{
// return new Promise((resolve, reject)=>{
// if(is_shop_open){
//     setTimeout(()=>{
//         resolve(production())

//     },time)
// }else{
//     reject(console.log("shop is closed"))
// }
// })
// }

// order( 2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order
// })

// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// // step 2
// .then(()=>{
//   return order(1000,()=>console.log('production has started'))
// })

// // step 3
// .then(()=>{
//   return order(2000, ()=>console.log("Fruit has been chopped"))
// })

// // step 4
// .then(()=>{
//   return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })

// // step 5
// .then(()=>{
//   return order(1000, ()=>console.log("start the machine"))
// })

// // step 6
// .then(()=>{
//   return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
// })

// // step 7
// .then(()=>{
//   return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
// })

// // Step 8
// .then(()=>{
//   return order(2000, ()=>console.log("Serve Ice Cream"))
// })
