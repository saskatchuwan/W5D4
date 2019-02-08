Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
}

Array.prototype.myMap = function (callback) {
  const result = []

  //ES6
  // this.myEach(el => {
  //   result.push(callback(el));
  // });

  //ES5
  this.myEach(function (el) {
    result.push(callback(el));
  });

  return result;
}

Array.prototype.myReduce = function (callback, acc) {
  if (acc === undefined) {
    let acc = this[0];
    this.slice(1, this.length).myEach(el => 
      acc = callback(acc, el));
    return acc;
    } else {
      this.myEach(el => 
        acc = callback(acc, el));
      return acc;
  }
}


