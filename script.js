// -----------------------------------------------------------------------------------------------

// function reverseString(str) {
//   let result = str.split("").reverse().join("");

//   console.log(result);
// }
// reverseString("good");

// -----------------------------------------------------------------------------------------------

// palindrom function

// function palindrome(str) {
//   let nameone = str;

//   let nametwo = str.split("");

//   console.log(nametwo);

//   let nametwoextra = nametwo.reverse();

//   let namethree = nametwoextra.join("");

//   console.log(nametwoextra);

//   console.log(namethree);
//   let ispalindrome = false;

//   if (nameone == namethree) {
//     ispalindrome = true;
//   }

//   console.log(ispalindrome);
// }

// palindrome("madam");

// -----------------------------------------------------------------------------------------------

// counting number of particular letter in a given string

// function countString(str, letter) {
//   let count = 0;

//   // looping through the items
//   for (let i = 0; i < str.length; i++) {
//     // check if the character is at that position
//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// countString("good morning", "n");

// -----------------------------------------------------------------------------------------------

// program to count the number of vowels in a string

// defining vowels

// function countVowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];

//   // initialize count
//   let count = 0;

//   let strtwo = str.toLowerCase();

//   // loop through string to test if each character is a vowel
//   //   for (let char of strtwo) {
//   //     if (vowels.includes(char)) {
//   //       count++;
//   //     }
//   //   }

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str.charAt(i))) {
//       count++;
//     }
//   }

//   // return number of vowels
//   console.log(count);
// }

// // take input

// countVowel("aeiou hi");

// -----------------------------------------------------------------------------------------------

// find the second largest number in an array

// function findlarge() {
//   let arr = [1, 8, 9, 56, 68, 100, 2, 3, 4, 5];

//   let arrtwo = arr.sort((a, b) => a - b);

//   let secondlargestindex = arrtwo.length - 2;
//   console.log(arrtwo[secondlargestindex]);
// }

// findlarge();

// -----------------------------------------------------------------------------------------------

// find the sum of all numbers in given array

// function findsum() {
//   let arr = [1, 5];

//   let total = arr.reduce((a, b) => a + b);

//   console.log(total);
// }

// findsum();

// -----------------------------------------------------------------------------------------------

// function removechar(str) {
//   strtwo = str.replace("n", "");

//   console.log(strtwo);
// }

// removechar("morning");

// -----------------------------------------------------------------------------------------------
// function checkprime(num) {
//   let isPrime = true;
//   let number = num;
//   if (number > 1) {
//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//       if (number % i == 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       console.log(`${number} is a prime number`);
//     } else {
//       console.log(`${number} is a not prime number`);
//     }
//   }
// }

// checkprime(2);

// -----------------------------------------------------------------------------------------------

// program to check leap year
// function checkLeapYear(year) {
//   //three conditions to find out the leap year
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(year + " is a leap year");
//   } else {
//     console.log(year + " is not a leap year");
//   }
// }

// // console.log(200 % 400);

// // take input

// checkLeapYear(400);

// -----------------------------------------------------------------------------------------------

// function reversenum(num) {
//   let number = num.split("").reverse().join("");

//   console.log(number);
// }

// reversenum("58");

// -----------------------------------------------------------------------------------------------

function nonrepeate() {
  arr = [10, 10, 20, 30, 30, 40, 50, 60, 60, 80, 80, 80];
  list = arr.filter((x, i, a) => a.indexOf(x) == i);
  //   20,40,50

  console.log(list);
}

nonrepeate();

// -----------------------------------------------------------------------------------------------
