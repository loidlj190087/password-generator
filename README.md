Password Generator
This is a simple password generator that creates random passwords based on user-defined criteria.

Features
Generate random passwords of specified lengths.
Option to include special characters for added security.
Usage
To generate a password, you can specify the desired length and whether to include special characters.

Example
javascript
Code kopieren
const generatePassword = require('@loidlj190087/password-generator');

// Generate a password with 12 characters including special characters
console.log(generatePassword({ length: 12, useSpecialChars: true }));
Parameters
length: (Number) The desired length of the generated password (default: 8).
useSpecialChars: (Boolean) Set to true to include special characters (default: false).
Installation
To use this package, you can install it via npm:

bash
Code kopieren
npm install @loidlj190087/password-generator
License
This project is licensed under the MIT License and created by Julian Loidl.
