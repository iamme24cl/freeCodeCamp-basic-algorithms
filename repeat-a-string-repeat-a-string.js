// using Recursion
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else if (num === 1) {
    return str;
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

repeatStringNumTimes("abc", 3);

// Using iteration
function repeatStringNumTimes(str, num) {
  let finalString = "";
  while (num > 0) {
    finalString += str;
    num--;
  }
  return finalString;
}

repeatStringNumTimes("abc", 3);