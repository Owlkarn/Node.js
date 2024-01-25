# Project Name

@owlkarn/password_generator

## Installation

npm install @owlkarn/password_generator

## Usage

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

## Contributing
If you would like to contribute to this project, feel free to open issues or submit pull requests.

## History

1.0.0 (January 2024): Initial release  
1.0.1 (January 2024): Project name change  
1.0.2 (January 2024): Readme change
