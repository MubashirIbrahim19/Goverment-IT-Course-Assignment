const func = () =>{
    for(let i=0; i<=3; i++){
        if(i===0){
            let sum:number = 4 + 4;
            console.log(`4 + 4 = ${sum}`);
        }
        else if(i===1){
            let subtraction:number = 10 - 2;
            console.log(`10 - 2 = ${subtraction}`);
        }
        else if(i===2){
            let multi:number = 4 * 2;
            console.log(`4 * 2 = ${multi}`);
        }
        else if(i===3){
            let division:number = 16 / 2;
            console.log(`16 / 2 = ${division}`);
        }
    }
}

func();

