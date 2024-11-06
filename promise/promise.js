
let stock = {
    fruits: ["grapes", "apple", "banana"],
    laquid: ["water", "ice"],
    holder: ["con", "stack", "cup"],
    toppings: ["cholate", "peanuts"],
  };

  let ShopOpen = !true

  function order(time, work){
    // console.log("hello")
    return new Promise(function(resolve , reject){
        
        if(ShopOpen){
           
            setTimeout(function(){
                resolve(work())
            },time)

        }else{
            reject(console.log("shop is closed"))
        }
    })
  }

  order(2000,function(){
    console.log(`${stock.fruits[2]} was selected`)
  })
  .then(function(){
    return order(2000,()=> console.log("production has started"))
  })
  .then(function(){
    return order (2000,()=> console.log("cut the fruits"))
  })
  .then(function(){
    return order (1000,()=> console.log(`add ${stock.laquid[0]} and ${stock.laquid[1]}`))
  })
  .then(function(){
    return order (1000,()=> console.log(`started the machine`))
  })
  .then(function(){
    return order (2000,()=> console.log(`slect the container ${stock.holder[0]}`))
  })
  .then(function(){
    return order (3000,()=> console.log(`slect the topping ${stock.toppings[1]}`))
  })
  .then(function(){
    return order (3000,()=> console.log(`your icecream is ready`))
  })
  .catch(function(err){
    console.log("shopkeeper is closed and go the fajir namaz")
  })