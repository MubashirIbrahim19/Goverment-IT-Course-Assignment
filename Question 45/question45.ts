const myCar = (manufacturer,modelName,argument) =>{
    let car:any = {
        manufacturer:manufacturer,
        modelName:modelName,
        
    };
    for (const key in argument) {
        if (argument.hasOwnProperty(key)) {
            car[key] = argument[key];
        }
    }

    console.log(car);
}

myCar('Toyota','Camry',{color:'red',year:'2020'});