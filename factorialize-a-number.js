// Factorialize a NumberPassed

// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  if (num == 1 || num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);

// Another Way to acheive this.

function factorialize(num) {
  if (num > 1) {
    return num * factorialize(num - 1);
  } else {
    return 1;
  }
}

factorialize(5);

// Use Iteration to eliminate tail recursion call

function factorialize(num) {
 let result = 1;
 while (num > 1) {
   result = result * num;
   num--;
 }
 return result;
}

factorialize(5);