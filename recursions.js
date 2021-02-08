/*
Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

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
Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

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
console.log(powerCalculator(3, 4));

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

console.log(reverse("word"));
