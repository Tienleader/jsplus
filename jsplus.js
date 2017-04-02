Object.defineProperties(window, {
	or: {
		value: function() {
			var args = arguments, i;
			for (i = 1; i < args.length; i++) {
				if (args[i] === args[0])
					return true;
			}
			return false;
		}
	},
	rand: {
		value: function(a, b) {
			if (b === undefined)
				[a, b] = [0, a];
			if (a > b)
				[a, b] = [b, a];
			return Math.floor(a + Math.random() * (Math.abs(b - a) + 1));
		}
	},
	switchVal: {
		value: function(val, arr, dfl) {
			for (let i = 0; i < arr.length; i += 2) {
				if (val === arr[i])
					return arr[i + 1];
			}
			return dfl;
		}
	}
});

Object.defineProperties(Object, {
	each: {
		value: function(obj, fn) {
			for (let i in obj) {
				if (obj.hasOwnProperty(i)) {
					fn(obj[i], i);
				}
			}
		}
	},
	filter: {
		value: function(obj, fn) {
			var objFlt = {}, i;
			for (i in obj) {
				if (obj.hasOwnProperty(i) && fn(obj[i], i)) {
					objFlt[i] = obj[i];
				}
			}
			return objFlt;
		}
	},
	renameProperty: {
		value: function(obj, oldName, newName) {
			if (obj.hasOwnProperty(oldName)) {
				for (let i in obj) {
					if (obj.hasOwnProperty(i)) {
						if (i === oldName) {
							obj[newName] = obj[oldName];
							delete obj[oldName];
						}
						else {
							let temp = obj[i];
							delete obj[i];
							obj[i] = temp;
						}
					}
				}
			}
			return obj;
		}
	},
	size: {
		value: function(obj) {
			var count = 0;
			for (let i in obj) {
				if (obj.hasOwnProperty(i)) count++;
			}
			return count;
		}
	}
});

Object.defineProperties(Array.prototype, {
	chunk: {
		value: function(size = 1) {
			size *= 1;
			if (size === 0)
				return this;
			var a = [], i;
			for (i = 0; i < this.length; i += size) {
				a.push(this.slice(i, i + size));
			}
			return a;
		}
	},
	combine: {
		value: function(arr_key) {
			var a = {}, i;
			for (i = 0; i < this.length; i++) {
				a[arr_key[i]] = this[i];
			}
			return a;
		}
	},
	fill: {
		value: function(value, start = 0, end = this.length) {
			var i;
			for (i = +start; i < end; i++) {
				this[i] = value;
			}
			return this;
		}
	},
	first: {
		value: function() {
			return this[0];
		}
	},
	last: {
		value: function() {
			return this[this.length - 1];
		}
	},
	nth: {
		value: function(n = 0) {
			return n < 0 ? this[this.length + +n] : this[n];
		}
	},
	rand: {
		value: function() {
			return this[Math.floor(Math.random() * this.length)];
		}
	},
	shuffle: {
		value: function() {
			var b = this.slice(0), r;
			this.splice(0);
			while (b.length) {
				r = Math.floor(Math.random() * b.length);
				this.push(b[r]);
				b.splice(r, 1);
			}
			return this;
		}
	},
	unique: {
		value: function() {
			var a = this.slice(0), i, li;
			for (i = 0; i < a.length - 1; i++) {
				while (i !== (li = a.lastIndexOf(a[i]))) {
					a.splice(li, 1);
				}
			}
			return a;
		}
	}
});

Object.defineProperties(String.prototype, {
	isBlank: {
		value: function() {
			return this.valueOf().trim().length === 0;
		}
	},
	isEmpty: {
		value: function() {
			return this.valueOf().length === 0;
		}
	},
	isLowerCase: {
		value: function() {
			var s = this.valueOf();
			return s === s.toLowerCase();
		}
	},
	isNumeric: {
		value: function() {
			return +this.valueOf() !== NaN;
		}
	},
	isUpperCase: {
		value: function() {
			var s = this.valueOf();
			return s === s.toUpperCase();
		}
	},
	ln2br: {
		value: function() {
			return this.valueOf().replace(/\n/g, "<br>");
		}
	},
	lowerFirst: {
		value: function() {
			var s = this.valueOf();
			return s[0].toLowerCase() + s.slice(1);
		}
	},
	upperFirst: {
		value: function() {
			var s = this.valueOf();
			return s[0].toUpperCase() + s.slice(1);
		}
	}
});

Object.defineProperties(Number.prototype, {
	toSign: {
		value: function() {
			var n = this.valueOf();
			if (n > 0)
				return "+" + n;
			return "" + n;
		}
	},
	zeroFill: {
		value: function(width) {
			var n = this.valueOf(), num0, rsl;
			rsl = n.toString().match(/(\-?)(\d+)(.*)/);
			num0 = (num0 = width - rsl[2].length) > 0 ? "0".repeat(num0) : "";
			return rsl[1] + num0 + rsl[2] + rsl[3];
		}
	}
});

Object.defineProperties(Audio.prototype, {
	replay: {
		value: function() {
			this.load();
			this.play();
		}
	}
});

var KeyboardMap = {
	8: "Backspace",
	9: "Tab",
	13: "Enter",
	16: "Shift",
	17: "Ctrl",
	18: "Alt",
	19: "Pause/Break",
	20: "Caps Lock",
	27: "Esc",
	32: "Space",
	33: "Page Up",
	34: "Page Down",
	35: "End",
	36: "Home",
	37: "Left",
	38: "Up",
	39: "Right",
	40: "Down",
	45: "Insert",
	46: "Delete",
	48: "0",
	49: "1",
	50: "2",
	51: "3",
	52: "4",
	53: "5",
	54: "6",
	55: "7",
	56: "8",
	57: "9",
	65: "A",
	66: "B",
	67: "C",
	68: "D",
	69: "E",
	70: "F",
	71: "G",
	72: "H",
	73: "I",
	74: "J",
	75: "K",
	76: "L",
	77: "M",
	78: "N",
	79: "O",
	80: "P",
	81: "Q",
	82: "R",
	83: "S",
	84: "T",
	85: "U",
	86: "V",
	87: "W",
	88: "X",
	89: "Y",
	90: "Z",
	91: "Windows",
	93: "Right Click",
	96: "Numpad 0",
	97: "Numpad 1",
	98: "Numpad 2",
	99: "Numpad 3",
	100: "Numpad 4",
	101: "Numpad 5",
	102: "Numpad 6",
	103: "Numpad 7",
	104: "Numpad 8",
	105: "Numpad 9",
	106: "Numpad *",
	107: "Numpad +",
	109: "Numpad -",
	110: "Numpad .",
	111: "Numpad /",
	112: "F1",
	113: "F2",
	114: "F3",
	115: "F4",
	116: "F5",
	117: "F6",
	118: "F7",
	119: "F8",
	120: "F9",
	121: "F10",
	122: "F11",
	123: "F12",
	144: "Num Lock",
	145: "Scroll Lock",
	182: "My Computer",
	183: "My Calculator",
	186: ";",
	187: "=",
	188: ",",
	189: "-",
	190: ".",
	191: "/",
	192: "`",
	219: "[",
	220: "\\",
	221: "]",
	222: "'"
};
