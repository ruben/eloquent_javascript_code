function Rabbit(type) {
  this.type = type;
}

var killerRabbit = new Rabbit("killer");
var blackRabbit = new Rabbit("black");

// A prototype can be used at any time to add new properties and methods to all objects based on it.
Rabbit.prototype.dance = function(){
    console.log("The " + this.type + " rabbit dances a jig.");
}

killerRabbit.dance();

// That is very convenient but there are times when it can cause problem
// Let's suppose we use the object ages to store the ages of many users.
var ages = {};
function storeAge(name, age){
  ages[name] = age;
}

storeAge('Larry', 15);
storeAge('Simon', 40);

//Unfortunately the object prototype gets in the way.
Object.prototype.nonsense = "hi";
for (var name in ages)
    console.log(name);

// The binary in operator, when applied to a string and an object,
// returns a boolean value that indicates whether that object has that property.
console.log('Larry' in ages);
console.log('toString' in ages);

// Enumerable properties are that ones that show in a for loop.
// By default user defined properties are enumerable
// We can define non-enumerable properties
Object.defineProperty(Object.prototype, 'hiddenNonsense', {enumerable: false, value: 'hi'});
for (var name in ages)
    console.log(name);

// To check whether a property exists in one object
// hasOwnProperties does not look up in the prototypes.
console.log(ages.hasOwnProperty('hiddenNonsense'));

// To be sure we only deal with object properties, it recommended to check it like this
for (var name in ages) {
    if (ages.hasOwnProperty(name)) {
        console.log(name);
    }
}

