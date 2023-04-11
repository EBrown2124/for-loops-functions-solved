
// EXERCISE 3
// Make sure to solve two parts beneath

/** 
 * PART 1
 * Return the average value for the given array of numbers.
 * Example: getAverage([22, 45, 4, 65]) => 34
 * */

export function getAverage(array) {
  var avg = 0; 
  
  for (var i = 0; i < array.length; i++){
    var currNum = array[i]

    avg += currNum;
  }
  avg = avg / array.length
  return avg;
}


/** 
 * PART 2
 * Create a getStringSum(str) function that returns the sum of any integers that are in the string.
 * Example1: getStringSum("GH2U87A") => 17
 * Example2: getStringSum("GHIUJUHSG") => 0
 * */ 

export function getStringSum(str) {
  // Your code goes here...
  var numArray = [];
  var foundNum = 0;
  
  var strArray = str.match(/[0-9]/g);
  if (strArray === null || strArray.length === 0){
  return 0;
  }
  else{
    for(var i = 0; i < strArray.length; i++){
      numArray.push(Number(strArray[i]));
    }

    for(var i = 0; i < numArray.length; i++){
      foundNum += numArray[i];
    }
    return foundNum;
  }
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-3"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
