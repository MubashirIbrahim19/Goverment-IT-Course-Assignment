var describe_city = function (country) {
    if (country === void 0) { country = ['Germany', 'Pakistan']; }
    var cities = ['Berlin', 'Karachi', 'Delhi'];
    for (var i = 0; i < country.length; i++) {
        if (country[i] === 'Germany') {
            console.log("".concat(cities[i], " is in ").concat(country[i]));
        }
        if (country[i] === 'Pakistan') {
            console.log("".concat(cities[i], " is in ").concat(country[i]));
        }
        if (country[i] === 'India') {
            console.log("".concat(cities[2], " is in ").concat(country[i]));
        }
    }
};
describe_city();
describe_city(['India']);
