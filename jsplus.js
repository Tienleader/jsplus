const or = function(){
  var a = arguments, i;
  for(i=1; i<a.length; i++)
    if(a[0] === a[i]) return true;
  return false;
};
const and = function(){
  var a = arguments, i;
  for(i=1; i<a.length; i++)
    if(a[0] !== a[i]) return false;
  return true;
};
const type = function(o){
  if( or(o + "", "null", "NaN", "Infinity", "-Infinity") )
    return (o + "").toLowerCase();
  else if( or(typeof o, "string", "number", "boolean", "function", "undefined") )
    return typeof o;
  return (o.constructor + "").slice(9, -20).replace(/^HTML|Element$/, "").toLowerCase() || "element";
};
Math.rand = function(num1, num2){
  var a, b;
  if(num2 === undefined) num2 = 0;
  a = Math.min(num1, num2);
  b = Math.max(num1, num2);
  return Math.floor(a + Math.random() * (b + 1 - a));
};
Math.hyp = function(x1, y1, x2, y2){
  switch( arguments.length ){
    case 2: return Math.sqrt( Math.pow( Math.abs(x1), 2 ) + Math.pow( Math.abs(y1), 2 ) ); break;
    case 4: return Math.sqrt( Math.pow( Math.abs(x2 - x1), 2 ) + Math.pow( Math.abs(y2 - y1), 2 ) ); break;
  }
};
Number.prototype.fixed = function(num){
  return +this.toFixed(num);
};
Number.prototype.addZeroes = function(len){
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
String.prototype.splice = function(start, len, str){
  if(str === undefined) str = "";
  return this.slice(0, start) + str + this.slice(start + len);
};
Array.prototype.clone = function(){
  return this.concat();
};
Array.prototype.unique = function(){
  var i;
  for(i=0; i<this.length; i++)
    while(i != this.lastIndexOf( this[i] )) this.splice(this.lastIndexOf( this[i] ), 1);
};
Array.prototype.isErratic = function(){
  var i;
  for(i=1; i<this.length; i++)
    if( this[0] !== this[i] && JSON.stringify(this[0]) !== JSON.stringify(this[i]) ) return true;
  return false;
};
Array.prototype.isSame = function(ary){
  var i;
  if( this.length !== ary.length ) return false;
  if( JSON.stringify( this ) !== JSON.stringify( ary ) ) return false;
  for(i=0; i<this.length; i++)
    if( type( this[i] ) !== type( ary[i] ) || typeof this[i] !== typeof ary[i] ) return false;
  return true;
}
Array.prototype.shuffle = function(same){
  var a, b, r;
  do {
    a = [];
    b = this.concat();
    while(b.length > 0){
      a.push( b[r = Math.rand( b.length - 1 )] );
      b.splice(r, 1);
    }
  }
  while(this.isSame(a) && !same && a.isErratic());
  return a;
};
