// @ts-ignore
const make_great= () =>{
    let mugicians = ['Alex','Lily','Max','Zoe'];
    console.log('Orginal Mugucians');
    for(let i = 0; i<mugicians.length; i++){
    console.log(`${mugicians[i]}`);
    }
}

const show_mugicians= () =>{
    let new_mugicians = ['Alex','Lily','Max','Zoe'];
    console.log(' Mugucians with the Great');
    for(let i = 0; i<new_mugicians.length; i++){
    console.log(`${new_mugicians[i]} the Great`);
    }
}


make_great();
show_mugicians();
