// EXERCISE 7
// Return an array with a bank account object with the lowest balance but not broke ( balance > 0 )
// In case there is no account that has balance > 0 return an empty array
// Array example: bankAccounts in /data/data.js
// getClientWithLeastBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

export function getClientWithLeastPositiveBalance(array) {
  // Your code goes here...
  let lowestNonZero1 = Infinity;
  let lowestNonZero2 = null;
  for(const acc of array){
      if (acc.balance !== 0 && acc.balance < lowestNonZero1) {
        lowestNonZero2 = acc
      }
    }
    if(lowestNonZero2 && lowestNonZero2.balance < 0){
      return [];
    }
    return [lowestNonZero2];
  }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-7"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function