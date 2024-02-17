const make_shirt = (largeMed:string = 'large', message = 'I love typecript') =>{
    if(largeMed === 'large'){
        console.log(`T-shirt size is to ${largeMed},${message}`);
    }
    else if(largeMed === 'medium'){
        console.log(`T-shirt size is to ${largeMed},${message}`);
    }
    if(largeMed === 'small'){
        console.log(`T-shirt size is to ${largeMed}`);
    }
    else if(largeMed === 'normal'){
        console.log(`T-shirt size is a ${largeMed}`);
    }
} 

make_shirt();
make_shirt('medium');
make_shirt('small','Hello, world');
make_shirt('normal', 'javascript is too easy');




