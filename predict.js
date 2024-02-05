// Problem 1
// Why did the code produce that output? If applicable, how would you get the index value that did not output?

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// prediction: tesla on first log, [mercedes, honda] on second log
// actual output: 
//      Tesla
//      Mercedes
// Why did the code produce that output? If applicable, how would you get the index value that did not output?:
//      the first destructure grabs from the beginning of the index, the second one skips the first (0) index because of the comma and goes
//      to the second (1) index. to get the third output we could put two commas in the destructuring brackets


// Problem 2
// Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { employeeName: otherName } = employee;
//Predict the output
console.log(otherName);
console.log(employeeName);

// prediction: this will console log the same thing twice because only a shallow copy was made 
// actual output:
//      error
// the code errored out because the console log "employeeName" was not defined. we could console log "employee" instead


// Problem 3
// Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// prediction: the first log will print 12345 the second will print 12345
// actual output:
//      12345
//      undefined
// the person object does not have password as a property so the value of hashedPassword is undefined


// Problem 4
// Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first === second);
console.log(first === third);

// prediction: 5 then 2
// actual output:
//      false
//      true
// well I didn't look at this closely enough or I would have gotten it right. the first variable is the 1 index(second in the array)
// which is 2 and the second is the 3 index (fourth in the array) which is 5, the third is the 8 index which is 2 again so 2===5 false, 2===2 true


// Problem 5
// Why did the code produce that output? Console.log the last value in the secondKey property's array.

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

// prediction: value, then [1,5,1,8,3,3], then 1, then 5
// yay it worked. key is destructured by the key name, the array can be destructured by index, so the name of the new variable does not matter


// Problem 6
// First, how many scopes does the following code block contain? Define each scope and guess what the output will be.

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);

// prediction: paul was found at index 0; and the repeat for the rest
// it looped through the array by index and printed the value and the index; after the loop a different statment is printed
// not sure why it says Ringo:4 instead of 3...

// Problem 7
// Why did the code produce that output?

function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      let name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }     

// prediction: there will be an error because there is no names array
// there was nothing to print

// Problem 8
// Why did the code produce that output? Explain the output, including any possible errors and why they occurred. 
// If there are no errors, explain the justification for each keyword used to declare variables.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);


// prediction: 