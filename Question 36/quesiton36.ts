// @ts-ignore
const make_shirt = () =>{
    let shirts = ['Polo Shirt','Button-down Shir','T-shirt'];
    for(let i = 0; i<=shirts.length; i++){
        if(shirts[i] === 'Polo Shirt'){
            console.log(`his medium-sized ${shirts[i]} fits comfortably and has a classic style.`);
        }
        if(shirts[i] === 'Button-down Shir'){
            console.log(`The large ${shirts[i]} provides a relaxed fit and is perfect for casual occasions.`);
        }
        if(shirts[i] === 'T-shirt'){
            console.log(`This small-sized ${shirts[i]} is lightweight and ideal for hot weather or casual wear.`);
        }
    }
}

make_shirt();