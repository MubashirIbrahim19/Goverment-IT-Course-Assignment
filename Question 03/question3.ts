let name1: string = 'Mubashir';

console.log(name1.toUpperCase());
console.log(name1.toLowerCase());

// Simple Title Case
let titlecaseName: string = name1[0].toUpperCase() + name1.slice(1).toLowerCase();

console.log("Titlecase: " + titlecaseName);