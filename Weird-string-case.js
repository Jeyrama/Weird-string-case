/*
Write a function that accepts a string, 
and returns the same string with all even indexed characters in each word upper cased, 
and all odd indexed characters in each word lower cased. 

The indexing just explained is zero based, so the zero-ith index is even, 
therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. 
Words will be separated by a single space(' ').

Examples:
  "String" => "StRiNg"
  "Weird string case" => "WeIrD StRiNg CaSe"
*/


// Solution

function toWeirdCase(string) {
  let str = '';
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      str += ' ';
      counter = 0;
    } else if (counter % 2 === 0) {
      str += string[i].toUpperCase();
      counter++;
    } else if (counter % 2 !== 0) {
      str += string[i].toLowerCase();
      counter++;
    }
  }
  return str;
}

// or

const toWeirdCase = function (string) {
  return string.toLowerCase().split(' ').map(mapWord).join(' ');
};

const mapWord = function (word) {
  return word.split('').map(mapCharacter).join('');
};

const mapCharacter = function (letter, index) {
  return (index % 2 === 0) ? letter.toUpperCase() : letter;
}