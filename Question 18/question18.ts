let places: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rio de Janeiro"];

// Original order
console.log(places);

console.log('with alphabatic order')//with alphabatic order
let AlphabaticOrder = [...places].sort();
console.log(AlphabaticOrder);

console.log('// Original order')// Original order
console.log(places);

console.log('with alphabatic order and reverse')// with alphabatic order and reverse
let reverse = AlphabaticOrder.reverse();
console.log(reverse);

console.log('Original order')// Original order
console.log(places);
console.log('reverseAgain');

let reverseAgain = places.reverse();
console.log(reverseAgain);

console.log('reverseAgainagain');
let reverseAgainagain = places.reverse();
console.log(reverseAgainagain);

console.log('Sort');
let Sort = places.sort();
console.log(Sort);



