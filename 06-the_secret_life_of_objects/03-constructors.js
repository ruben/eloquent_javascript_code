// A more convenient way to create objects that derive from a shared prototype
// is to use a constructor.
// It is convention to capitalize the name of constructors.

function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

console.log(killerRabbit.type);
console.log(blackRabbit.type);

// Objects created with a constructor get a prototype derived from Object.
// In the case of functions created with the Rabbit constructor we can add
// the speak function.

Rabbit.prototype.speak = function (line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
};

killerRabbit.speak("I'm a killer");
blackRabbit.speak("I'm black");