// Your company assigns each member a membership ID, and you are implementing the check digit for those IDs.
// The check digit should be calculated by adding up all digits in each membership ID.
// If the result of the sum is a number with more than a single digit, 
// another iteration is required, and the digits of the result also should be added together.
// This process should repeat until a single-digit number is calculated.

// For example, for the membership ID "55555", the sum of all digits is 25.
// Because this is not a single-digit number, 2 and 5 would be added together to get 7.

// Write a function that takes a string as membership ID and returns the check digit for that ID.


function createCheckDigit(membershipId) {
    let sum = 0;
    for (let i = 0; i < membershipId.length; i++) {
        sum += Number(membershipId[i]);
    }
    while (sum > 9) {
        let sumStr = sum.toString();
        sum = 0;
        for (let i = 0; i < sumStr.length; i++) {
            sum += Number(sumStr[i]);
        }
    }
    return sum;
}
  
console.log(createCheckDigit("55555"));