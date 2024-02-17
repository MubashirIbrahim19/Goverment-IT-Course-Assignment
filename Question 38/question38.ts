const describe_city = (country:string[] = ['Germany','Pakistan']) =>{
    let cities = ['Berlin','Karachi','Delhi'];
    for(let i = 0; i< country.length; i++){
        if(country[i] === 'Germany'){
            console.log(`${cities[i]} is in ${country[i]}`);
        }
        if(country[i] === 'Pakistan'){
            console.log(`${cities[i]} is in ${country[i]}`);
        }
        if(country[i] === 'India'){
            console.log(`${cities[2]} is in ${country[i]}`);
        }
    }     

}

describe_city();
describe_city(['India']);