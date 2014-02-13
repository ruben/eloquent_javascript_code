// Methods are simply properties that hold function values.
var rabbit = {};
rabbit.speak = function (line) {
    console.log("The rabbit says '" + line + "'");
};
rabbit.speak("I'm alive.");

// When a function is called as a method, the special variable 'this'
// will point to the object it was called on.
function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
}
var whiteRabbit = { type: 'white', speak: speak };
var fatRabbit = { type: 'fat', speak: speak };

whiteRabbit.speak('Hello');
fatRabbit.speak('Goodbye');

// To invoke a function we can use apply
// passing the object and the arguments as an array.
speak.apply(whiteRabbit, ['Oh my!']);

// Or call passing the arguments normally.
speak.call(whiteRabbit, 'Okey dokey');