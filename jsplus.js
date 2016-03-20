String.prototype.chr = function(num){
  if(num === undefined) num = 0;
  return this[num < 0 ? this.length + num : num];
};
String.prototype.reverse = function(){
  return this.split("").reverse().join("");
};
String.prototype.trimss(){
  return this.replace(/\s+\s+/g, " ");
};
