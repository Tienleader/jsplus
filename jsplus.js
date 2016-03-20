String.prototype.chr = function(num){
  return this[num < 0 ? this.length + num : num];
};
