// When you add a property to an object, that property is added to the object itself.
// The property in the prototype, if any, will no longer affect the object.
function Rabbit(type) {
    this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth);
killerRabbit.teeth = 'long, sharp and bloody';
console.log(killerRabbit.teeth);
console.log(blackRabbit.teeth);

// Overriding properties that exist in a prototype is often a useful thing to do.
console.log(Array.prototype.toString == Object.prototype.toString);
console.log([1, 2].toString());
console.log(Object.prototype.toString.call([1,2]));
