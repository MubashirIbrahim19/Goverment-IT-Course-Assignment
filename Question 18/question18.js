var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Tokyo", "Paris", "New York", "Sydney", "Rio de Janeiro"];
// Original order
console.log(places);
console.log('with alphabatic order'); //with alphabatic order
var AlphabaticOrder = __spreadArray([], places, true).sort();
console.log(AlphabaticOrder);
console.log('// Original order'); // Original order
console.log(places);
console.log('with alphabatic order and reverse'); // with alphabatic order and reverse
var reverse = AlphabaticOrder.reverse();
console.log(reverse);
console.log('Original order'); // Original order
console.log(places);
console.log('reverseAgain');
var reverseAgain = places.reverse();
console.log(reverseAgain);
console.log('reverseAgainagain');
var reverseAgainagain = places.reverse();
console.log(reverseAgainagain);
