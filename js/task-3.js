class StringBuilder {
    constructor(value) {
        this._value = value;
    }

    getValue() {
        return this._value;
    }

    padEnd(str) {
        return this._value += str;
    }

    padStart(str) {
        return this._value = str + this._value;
    }

    padBoth(str) {
        return this._value = str + this._value + str;
    }
}

console.log("============ Task 3 ============");

const builder = new StringBuilder(".");
console.log(builder.getValue());
builder.padStart("^");
console.log(builder.getValue());
builder.padEnd("^");
console.log(builder.getValue());
builder.padBoth("=");
console.log(builder.getValue());

console.log("================================");