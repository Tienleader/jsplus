Number.prototype.fixed = function(num){
  return +this.toFixed(num);
};
Number.prototype.addZeroes(len){
  var a, b;
  return (this < 0 ? "-" : "") + "0".repeat(len - (a = (b = (Math.abs(this) + "").split("."))[0]).length) + a + (b.length < 2 ? "" : "." + b[1]);
};
String.prototype.chr = function(num){
  if(num === undefined) num = 0;
  return this[num < 0 ? this.length + num : num];
};
String.prototype.reverse = function(){
  return this.split("").reverse().join("");
};
String.prototype.trimss = function(){
  return this.replace(/\s+\s+/g, " ");
};
Date.prototype.daysInMonth = function(){
  var t = new Date(this), d = 28;
  while( new Date( t.setDate( d ) ).getDate() > 1 ){
    d++;
  }
  return d - 1;
};
Date.prototype.daysInYear = function(){
  return new Date("2 29 " + this.getFullYear()).getDate() > 1 ? 366 : 365;
};
