// @ts-ignore
var city_country = function (country) {
    var city = ['Karachi', 'Delhi', 'Berlin'];
    for (var i = 0; i < city.length; i++) {
        if (city[i] === 'Karachi') {
            console.log("\"".concat(city[i], ",").concat(country[i], "\""));
        }
        if (city[i] === 'Delhi') {
            console.log("\"".concat(city[i], ",").concat(country[i], "\""));
        }
        if (city[i] === 'Berlin') {
            console.log("\"".concat(city[i], ",").concat(country[i], "\""));
        }
    }
};
city_country(['Pakistan', 'India', 'Germany']);
