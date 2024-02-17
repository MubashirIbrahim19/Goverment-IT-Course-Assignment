var myCar = function (manufacturer, modelName, argument) {
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    for (var key in argument) {
        if (argument.hasOwnProperty(key)) {
            car[key] = argument[key];
        }
    }
    console.log(car);
};
myCar('Toyota', 'Camry', { color: 'red', year: '2020' });
