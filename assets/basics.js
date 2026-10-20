// Task 0: first script
console.log('Name: ' + student.name);
console.log('Group: ' + student.group);
document.getElementById('student-label').textContent = student.name + ' · ' + student.group;
alert('Hello, JavaScript World!');
document.getElementById('greet').addEventListener('click', function () {
  alert('Hello, JavaScript World!');
});

// Task 1: variables and operators
let language = 'JavaScript';
let firstNumber = 12;
let secondNumber = 4;
let isLearning = true;
console.log(language, firstNumber, isLearning);
console.log('Addition: ' + (firstNumber + secondNumber));
console.log('Subtraction: ' + (firstNumber - secondNumber));
console.log('Multiplication: ' + (firstNumber * secondNumber));
console.log('Division: ' + (firstNumber / secondNumber));
let sentence = 'I am learning ' + language + ' with DOM and events.';
console.log(sentence);
document.getElementById('variables').textContent = 'String: ' + language + ' | Number: ' + firstNumber + ' | Boolean: ' + isLearning;
document.getElementById('arithmetic').textContent = '12 + 4 = ' + (firstNumber + secondNumber) + ', 12 - 4 = ' + (firstNumber - secondNumber) + ', 12 × 4 = ' + (firstNumber * secondNumber) + ', 12 ÷ 4 = ' + (firstNumber / secondNumber);
document.getElementById('concatenation').textContent = sentence;
