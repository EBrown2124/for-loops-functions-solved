
// EXERCISE 12
// Return an array of all deposits greater than 100
// Array example: bankAccounts in /data/data.js
// getAllDepositsGreaterThanOneHundred(bankAccounts) => [3432, 43242.34, 23432]

export function getAllDepositsGreaterThanOneHundred(array) {
  // Your code goes here...
  const depGreat = [];

  for (let i = 0; i < array.length; i++){
    let depositsCount = 0;
    if (array[i].deposits){
      for (let j = 0; j < array[i].deposits.length; j++) {
        const depositsCount = array[i].deposits[j];
        if (depositsCount > 100){
          depGreat.push(depositsCount);
        }
      }
    }
  }
  return depGreat
}




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
