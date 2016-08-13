Math.rand = function(a , b) {
	if (b === undefined)
		[a, b] = [0, a];
	if (a > b)
		[a, b] = [b, a];
	return Math.floor(a + Math.random() * (Math.abs(b - a) + 1));
};

Array.prototype.rand = function() {
	return this[Math.floor(Math.random() * this.length)];
};

Array.prototype.shuffle = function() {
	var b = this.concat(), r;
	this.splice(0);
	while (b.length) {
		r = Math.floor(Math.random() * b.length);
		this.push(b[r]);
		b.splice(r, 1);
	}
	return this;
};

Array.prototype.unique = function() {
	var p, i;
	for (i = 0; i < this.length; i++) {
		if (this.indexOf(this[i]) < (p = this.lastIndexOf(this[i])))
			this.splice(p, 1);
	}
	return this;
};

Array.prototype.__defineGetter__("last", function() {
	return this[this.length - 1];
});

String.prototype.pad = String.prototype.padRight = function(str, len) {
	var s = this.valueOf();
	if (s.length < len)
		s += (str + "").repeat(len - s.length);
	return s;
};

String.prototype.padLeft = function(str, len) {
	var s = this.valueOf();
	if (s.length < len)
		s = (str + "").repeat(len - s.length) + s;
	return s;
};

String.prototype.switch = function(obj) {
	var that = this.valueOf();
	if (obj.hasOwnProperty(that))
		return obj[that];
};

String.prototype.or = function() {
	var args = arguments, i;
	for (i = 0; i < args.length; i++) {
		if (args[i] === this.valueOf())
			return true;
	}
	return false;
};

String.prototype.toCapitalize = function() {
	return this.valueOf().replace(/\S+/g, function(v) { return v[0].toUpperCase() + v.slice(1); });
};

String.prototype.toLatinCharacters = function() {
	if (this == "") return "";
	var s = this.valueOf();
	s = s.replace(/\u00e0|\u00e1|\u1ea3|\u00e3|\u1ea1|\u0103|\u1eb1|\u1eaf|\u1eb3|\u1eb5|\u1eb7|\u00e2|\u1ea7|\u1ea5|\u1ea9|\u1eab|\u1ead/g, "a");
	s = s.replace(/\u00e9|\u00e8|\u1ebb|\u1ebd|\u1eb9|\u00ea|\u1ec1|\u1ebf|\u1ec3|\u1ec5|\u1ec7/g, "e");
	s = s.replace(/\u00ec|\u00ed|\u1ec9|\u0129|\u1ecb/g, "i");
	s = s.replace(/\u00f2|\u00f3|\u1ecf|\u00f5|\u1ecd|\u00f4|\u1ed3|\u1ed1|\u1ed5|\u1ed7|\u1ed9|\u01a1|\u1edd|\u1edb|\u1edf|\u1ee1|\u1ee3/g, "o");
	s = s.replace(/\u00f9|\u00fa|\u1ee7|\u0169|\u1ee5|\u01b0|\u1eeb|\u1ee9|\u1eed|\u1eef|\u1ef1/g, "u");
	s = s.replace(/\u00fd|\u1ef3|\u1ef7|\u1ef9|\u1ef5/g, "y");
	s = s.replace(/\u0111/g, "d");
	s = s.replace(/\u00c0|\u00c1|\u1ea2|\u00c3|\u1ea0|\u0102|\u1eb0|\u1eae|\u1eb2|\u1eb4|\u1eb6|\u00c2|\u1ea6|\u1ea4|\u1ea8|\u1eaa|\u1eac/g, "A");
	s = s.replace(/\u00c8|\u00c9|\u1eba|\u1ebc|\u1eb8|\u00ca|\u1ec0|\u1ebe|\u1ec2|\u1ec4|\u1ec6/g, "E");
	s = s.replace(/\u00cd|\u00cc|\u1ec8|\u0128|\u1eca/g, "I");
	s = s.replace(/\u00d2|\u00d3|\u1ece|\u00d5|\u1ecc|\u00d4|\u1ed2|\u1ed0|\u1ed4|\u1ed6|\u1ed8|\u01a0|\u1edc|\u1eda|\u1ede|\u1ee0|\u1ee2/g, "O");
	s = s.replace(/\u00d9|\u00da|\u1ee6|\u0168|\u1ee4|\u01af|\u1eea|\u1ee8|\u1eec|\u1eee|\u1ef0/g, "U");
	s = s.replace(/\u00dd|\u1ef2|\u1ef6|\u1ef8|\u1ef4/g, "Y");
	s = s.replace(/\u0110/g, "D");
	return s;
};

String.prototype.toCamelCase = function() {
	if (this == "") return "";
	var s = this.valueOf().toLatinCharacters().toCapitalize().replace(/\s+/g, "");
	return s[0].toLowerCase() + s.slice(1);
};

Number.prototype.addZeroes = function(len) {
	var n = this + "";
	if (n.length < len)
		n = "0".repeat(len - n.length) + n;
	return n;
};

Number.prototype.switch = String.prototype.switch;

Number.prototype.or = String.prototype.or;
