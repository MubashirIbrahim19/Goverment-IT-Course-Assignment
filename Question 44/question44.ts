const sandwiches = (array) =>{
    for(let i = 0; i<array.length; i++){
        if(array[i] === 'Club Sandwich'){
            console.log('Triple-decker sandwich with chicken, bacon, lettuce, tomato, and mayonnaise.');
            console.log("\n");
        }
        if(array[i] === 'BLT Sandwich'){
            console.log(' Consists of bacon, lettuce, and tomato, usually with mayonnaise between two slices of toasted bread.');
            console.log("\n");
        }
        if(array[i] === 'Grilled Cheese Sandwich'){
            console.log(' A sandwich with melted cheese between grilled bread slices.');
            console.log("\n");
        }
        if(array[i] === 'Turkey Sandwich'){
            console.log('Slices of roasted turkey, lettuce, tomato, and either mayonnaise or mustard between slices of bread.');
            console.log("\n");

        }
        if(array[i] === 'Vegetable Sandwich'){
            console.log(' Various vegetables such as cucumbers, bell peppers, onions, tomatoes, and lettuce, often with spreads like hummus or mayonnaise.');
            console.log("\n");
        }
        if(array[i] === 'Peanut Butter and Jelly Sandwich'){
            console.log(' A sandwich with peanut butter and jelly (or jam) between slices of bread.');
            console.log("\n");

        }
    }
}

sandwiches(['Club Sandwich','BLT Sandwich']);
sandwiches(['Grilled Cheese Sandwich','Turkey Sandwich']);
sandwiches(['Vegetable Sandwich','Peanut Butter and Jelly Sandwich']);
