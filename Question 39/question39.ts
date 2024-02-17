// @ts-ignore
const city_country = (country:string[]) =>{
    let city =['Karachi','Delhi','Berlin']
    for(let i = 0; i<city.length; i++){
        if(city[i] === 'Karachi'){
            console.log(`"${city[i]},${country[i]}"`);
        }
        if(city[i] === 'Delhi'){
            console.log(`"${city[i]},${country[i]}"`);
        }
        if(city[i] === 'Berlin'){
            console.log(`"${city[i]},${country[i]}"`);
        }
    }
}

city_country(['Pakistan','India','Germany']);
