var string = 'Mubashir';
if (string === "Mubashir") {
    console.log('True');
}
else {
    console.log('False');
}
var lowercase = 'javascript';
if (lowercase === 'JAVASCRIPT') {
    console.log('True');
}
else {
    console.log('False');
}
var adult = 21;
if (adult === 21) {
    console.log('True');
}
else {
    console.log('False');
}
var old = 21;
if (old < 20) {
    console.log('True');
}
else {
    console.log('False');
}
function compareNumbers(a, b) {
    if (a >= b) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}
compareNumbers(6, 5);
function compareNumber(a, b) {
    if (a <= b) {
        console.log('True');
    }
    else {
        console.log('False');
    }
}
compareNumber(10, 5);
function isInArray() {
    var array = [1, 2, 3, 4, 5];
    var item = 3;
    console.log(array.includes(item));
}
isInArray(); // Output: false
function isInarray() {
    var array = [1, 2, 3, 4, 5];
    var item = 6;
    console.log(array.includes(item));
}
isInarray();
