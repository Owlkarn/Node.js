// import calculateResultSum from "./calc.js";
require('colors');

const calculateResultSum = require("./calc.js")
const generatePassword = require('@owlkarn/password_generator');

//Example 1: Generate a default password (12 characters, letters, numbers, special characters)
const passwordDefault = generatePassword();
console.log('Default Password:', passwordDefault);

// Example 2: Generate a password with a custom length (e.g., 16 characters)
const passwordCustomLength = generatePassword(16);
console.log('Custom Length Password (16 characters):', passwordCustomLength);

// Example 3: Generate a password with only letters
const passwordOnlyLetters = generatePassword(10, { useLetters: true, useNumbers: false, useSpecialChars: false });
console.log('Password with only letters:', passwordOnlyLetters);

// Example 4: Generate a password with only numbers
const passwordOnlyNumbers = generatePassword(8, { useLetters: false, useNumbers: true, useSpecialChars: false });
console.log('Password with only numbers:', passwordOnlyNumbers);

// Example 5: Generate a password without special characters
const passwordNoSpecialChars = generatePassword(14, { useSpecialChars: false });
console.log('Password without special characters:', passwordNoSpecialChars);


const total = calculateResultSum([12.1, 32.2, 43.1], 0.9);
const text = "Общая стоимость покупок " + total;
console.log(total > 50 ? text.red : text.green);