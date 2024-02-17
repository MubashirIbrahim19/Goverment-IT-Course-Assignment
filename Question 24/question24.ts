 let string = 'Mubashir';
 if(string === "Mubashir"){
    console.log('True');
 }
 else{
    console.log('False');
 }
 
 let lowercase = 'javascript';
 if(lowercase === 'JAVASCRIPT'){
    console.log('True');
 }
 else {
    console.log('False');
 }

 let adult = 21;
 if(adult === 21){ 
    console.log('True');
 }
 else{
    console.log('False');
 }

 let old = 21;

 if(old < 20){
    console.log('True');

 }
 else{
    console.log('False');
 }

 function compareNumbers(a: number, b: number): void {
    if (a >= b) {
        console.log('True');
    } else {
        console.log('False');
    }
}

compareNumbers(6, 5);

function compareNumber(a: number, b: number): void {
    if (a <= b) {
        console.log('True');
    } else {
        console.log('False');
    }
}

compareNumber(10, 5);

function isInArray(): void {
    let array: number[] = [1, 2, 3, 4, 5];
    let item: number = 3;
    console.log(array.includes(item));
}

isInArray(); // Output: false


function isInarray(): void {
    let array: number[] = [1, 2, 3, 4, 5];
    let item: number = 6;
    console.log(array.includes(item));
}

isInarray(); 








