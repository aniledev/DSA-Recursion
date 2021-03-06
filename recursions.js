/*
1. Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

Input: 3
Output:
3: Another sheep jumps over the fence
2: Another sheep jumps over the fence
1: Another sheep jumps over the fence
All sheep jumped over the fence 
*/

function sheepCounter(number) {
  // base case, number is 0
  if (number === 0) {
    return;
  }
  console.log(number + ": Another sheep jumps over the fence");
  sheepCounter(number - 1);
}
sheepCounter(3);

/*
2. Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

powerCalculator(10,2) should return 100
powerCalculator(10,-2) should return exponent should be >= 0

input: base (number), exponent (number)
input: 10, 2
output: product (number)
output: 100
*/

function powerCalculator(base, exponent) {
  // base case, the exponent is equal to zero or less
  if (exponent <= 0) {
    return "Exponent should be >= 0";
  } else if (exponent == 1) {
    return base;
  } else {
    return base * powerCalculator(base, exponent - 1);
  }
}
powerCalculator(3, 4);

/* 
3. Reverse String
Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

input: word (string)

d
dr
dro
drow
output: drow (string)

*/

function reverse(string) {
  // base case
  if (string.length === 1) {
    return string[0];
  }
  // recursive case
  else {
    let letter = string[string.length - 1];
    let remaining = string.slice(0, -1);
    return letter + reverse(remaining);
  }
}
reverse("reverse");

/*
4. Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

input: 10 (number)
output: 55 (number)

*/

function nthCalc(number) {
  // base case, if the number is 1
  if (number === 1) {
    return 1;
  }
  //recursive case, the number - 1 each time and add them up
  else {
    return number + nthCalc(number - 1);
  }
}
nthCalc(11);

/* 
5. Write a recursive function that splits a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.
Input: "02/20/2020"
Output: ["02", "20", "2020"]

Input: string
Output: array of strings
*/

function stringSplitter(string, symbol) {
  if (!string) {
    return "";
  }

  if (string[0] === symbol) {
    return stringSplitter(string.slice(1), symbol);
  } else if (string[0] !== symbol) {
    return string[0] + stringSplitter(string.slice(1), symbol);
  }
}
stringSplitter("03/12/1994", "/");

/*
6. Fibonacci
Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

*/

function fibonacci(number) {
  // base case === 1 === 2
  if (number === 1 || number === 2) {
    return 1;
  } else {
    return fibonacci(number - 2) + fibonacci(number - 1);
  }
}

console.log(fibonacci(11));

/*
7. Factorial
Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
Input : 5
Output: 10
Input: 7
Output: 120
*/

function factorial(number) {
  // base case
  if (number === 1) {
    return 1;
    // recursive case
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(7));

/* 
8. Find a way out of the maze
You have entered a Maze and need to find your way out of it. There are more than one possible paths 
through the Maze to the single exit point. Write a recursive function that will help you find a 
possible path through the maze.
Input:
Output:
*/

/* 
9. Find all the ways out of the maze
Use the above maze and modify your solution so it finds All the possible exit paths through the Maze. 
Input:
Output:
*/

/* 
10. Anagrams
An anagram is any word or phrase that uses the letters of a given ("subject") word or phrase in another, 
rearranged order. Write a function that creates an anagram list, listing all the rearrangements of a given 
word. For example, if the user types "east", the program should list all 24 permutations, including "eats", 
"etas", "teas", and non-words like "tsae".
Input: "the"
Output: ["the", "teh", "hte", "het", "eth", "eht"]
*/

function anagram(word) {
  // base case, if the word parameter has 1 character, then add the word to the list
  // create an empty array to hold the output
  const list = [];

  if (word.length === 1) {
    list.push(word);
    return list;
  }

  // recursive case
  // use a for loop to loop through the word parameter

  for (let i = 0; i < word.length; i++) {
    // create a variable to hold the prefix of the word, the first character
    const prefix = word[i];
    // create a variable to hold the rest of the word, remaining character indexes
    const remaining = word.substring(0, i) + word.substring(i + 1);
    let words = anagram(remaining); // this will return an array saved to the words variable
    for (let j = 0; j < words.length; j++) {
      list.push(prefix + words[j]);
    }
  }
  return list;
}

console.log(anagram("help"));

/* 
11. Organization Chart
Write a recursive function that prints the following organization chart. Your output should be as shown below 
with proper indentation to show the hierarchy. You may store the org chart in an object and send that as an 
input to your program.
*/

// store  org chart as an object
const org = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

// use default indentation as parameter
function orgChart(obj, indent = "") {
  // create an empty string to hold the output
  let output = "";
  // use for in loop to target each key in the org object
  for (let key in obj) {
    output = output + indent + key + "\n";
    output = output + orgChart(obj[key], indent + "     ");
  }
  return output;
}

console.log(orgChart(org));

/* 
11. Binary Representation
Write a recursive function that prints out the binary representation of a given number. For example, the 
program should take 3 as an input and print 11 as output, or 25 as an input and print 11001 as an output. Note 
that the binary representation of 0 should be 0.
Input: 15
Output: 1111
*/

function binary(number) {
  // base case, if the number is 0
  if (number === 0) {
    return "";
  } else {
    // recusive case
    return `${binary(Math.floor(number / 2))}${number % 2}`;
  }
}
console.log(binary(15));
