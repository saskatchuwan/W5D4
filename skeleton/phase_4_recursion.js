function range(start, end) {
  // debugger
  if (end === (start + 1)) {
    return [start]; 
  }

  return range(start, (end - 1)).concat([end - 1]);
}


function sumRec(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  return arr.pop() + sumRec(arr);
}

// function exponent(base, exp) {
//   if (exp === 0) {
//     return 1;
//   }

//   return base * exponent(base, exp - 1);
// }


function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } else if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return exponent(base, exp/2) ** 2;
  } else {
    return base * (exponent(base, (exp - 1)/2) ** 2);
  }
}

