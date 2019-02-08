Array.prototype.bubbleSort = function () {

  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }

  return this;
}

String.prototype.substrings = function () {
  const result = [];

  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length + 1; j++) {
      result.push(this.slice(i, j));
    }
  }

  return result;
} 