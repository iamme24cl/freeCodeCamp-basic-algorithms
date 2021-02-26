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