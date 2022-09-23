function vacation (numPeople, typeOfTheGroup, day) {

    let price = 0;
    let totalPrice = 0;
     let tenFree = 0;

    if(typeOfTheGroup === `Students`) {
        if(day === `Friday`) {
          price = numPeople * 8.45
        } else if (day === `Saturday`) {
            price = numPeople * 9.80
        } else if (day === `Sunday`) {
            price = numPeople * 10.46
        }
    } else if (typeOfTheGroup === `Business`) {
        if(numPeople >= 100) {
            numPeople -= 10
        }
        if(day === `Friday`) {
            price = numPeople * 10.90
        } else if (day === `Saturday`) {
            price = numPeople * 15.60
        } else if (day === `Sunday`) {
            price = numPeople * 16
        }
    } else if (typeOfTheGroup === `Regular`) {
        if(day === `Friday`) {
            price =  numPeople * 15
        } else if (day === `Saturday`) {
            price = numPeople * 20
        } else if (day === `Sunday`) {
            price = numPeople * 22.50 
        } 
    }

    if(typeOfTheGroup === `Students` && numPeople >= 30) {
        price = price - (price * 0.15)
    }  else if (typeOfTheGroup === `Regular` && numPeople >= 10 && numPeople <= 20) {
            price = price - (price * 0.05)
    }

console.log(`Total price: ${price.toFixed(2)}`);

}
vacation(
    30,

    "Students",
    
    "Sunday")
