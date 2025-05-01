let number = 1; //To contain the number that we will be checking.

let divideTwoRemainder = number % 2; //To contain the remainder after dividing the number by 2.

let evenOrOdd; //To contain the final answer whether it is even or odd.

if (divideTwoRemainder === 0) {
  //Set a control flow where if the remainder is 0, overwrite evenOrOdd variable with "Even", else overwrite with "Odd".
  evenOrOdd = "Even";
} else {
  evenOrOdd = "Odd";
}

console.log(evenOrOdd); //Finally, print the evenOrOdd variable.
