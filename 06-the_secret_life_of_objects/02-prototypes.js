// All Objects have a prototype.
// A prototype is another object that acts a fall-back source of properties
var empty = {}

console.log(empty.toString);
console.log(empty.toString());

// The default prototype for all objects is Object.prototype
console.log(Object.getPrototypeOf({}) == Object.prototype);

// Object.prototype is the prototype of all objects
// and has no prototype
console.log(Object.getPrototypeOf(Object.prototype));

// Functions derive from Function.prototype
console.log(Object.getPrototypeOf(isNaN) == Function.prototype);
// and Arrays derive from Array.prototype
console.log(Object.getPrototypeOf([]) == Array.prototype);

// You can use Object.create to create an object with an specific prototype
var protoRabbit = {
    speak: function(line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
    }
};
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('AARRRGGGHHH!!!');

