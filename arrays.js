Array.prototype.randomDiffElement = function(last) {
    if (this.length == 0) {
      return;
    } else if (this.length == 1) {
      return this[0];
    } else {
      var num = 0;
      do {
        num = Math.floor(Math.random() * this.length);
      } while (this[num] == last);
      return this[num];
    }
  };

function randomrange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
