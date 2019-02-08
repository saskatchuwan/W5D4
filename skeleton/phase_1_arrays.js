

Array.prototype.uniq = function () {
  const results = [];

  this.forEach(function (el) {
    if (!results.includes(el)) {
      results.push(el);
    }
  });

  return results;
}

Array.prototype.twoSum = function () {
  const results = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        results.push([i,j]);
      }
    }
  }
  return results;
}

Array.prototype.transpose = function () {
  const arrayCopy = [[0,0,0], [0,0,0], [0,0,0]];//Need to look up how to create 2D array

  // debugger
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this[i].length; j++) {
      arrayCopy[i][j] = this[j][i]; 
    }
  }

  return arrayCopy;
}