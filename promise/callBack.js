/// async

// console.log("I")

// setTimeout(function(){
//     console.log("eat")
// },2000 )

// console.log("iceream")

//CallBack funcation

// function one(callBack){
//     console.log("function one is ready call funcation two")
//     callBack()

// }

// function two(){
//     console.log("funcation two is called")

// }

// one(two)

let stock = {
  fruits: ["grapes", "apple", "banana"],
  laquid: ["water", "ice"],
  holder: ["con", "stack", "cup"],
  toppings: ["cholate", "peanuts"],
};

function order(fruitsName, Callback_production) {
  setTimeout(function () {
    console.log(
      `order placed ${stock.fruits[fruitsName]} was selected please send into production`
    );
    Callback_production();
  }, 2000);
}

function production() {
  console.log("order recived starting proudation");

  setTimeout(function () {
    console.log("cut the fruits");

    setTimeout(function () {
      console.log(`added ${stock.laquid[0]} and ${stock.laquid[1]}`);

      setTimeout(function () {
        console.log("started the machine");

        setTimeout(function () {
          console.log(`selected the container ${stock.holder[1]}`);

          setTimeout(function () {
            console.log(`placed ${stock.toppings[0]} on topping`);

            setTimeout(function () {
              console.log("your icecream is ready to eat");
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 2000);
}

order(1, production);
