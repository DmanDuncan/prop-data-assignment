function PropData(num) {

    // declare empty array to hold return values
    const numbers = []
    
    // loop over given number length
    for(let number = 1; number <= num; number++) {

    // check if number meet divisible criteria
      if(number % 5 === 0 && number % 3 === 0) {
        numbers.push("PropData")
      } else if(number % 3 === 0) { 
        numbers.push("Prop")
      } else if(number % 5 === 0 && number % 5 === 0) {
        numbers.push("Data")
      } else {
        numbers.push(number)
      }
    }
    
    //return list of values
    return numbers;
  }
  
  // test data
  console.log(PropData(8))
  console.log(PropData(16))
  console.log(PropData(25))
  console.log(PropData(30))