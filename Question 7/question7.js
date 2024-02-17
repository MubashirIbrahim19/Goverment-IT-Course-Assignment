var func = function () {
    for (var i = 0; i <= 3; i++) {
        if (i === 0) {
            var sum = 4 + 4;
            console.log("4 + 4 = ".concat(sum));
        }
        else if (i === 1) {
            var subtraction = 10 - 2;
            console.log("10 - 2 = ".concat(subtraction));
        }
        else if (i === 2) {
            var multi = 4 * 2;
            console.log("4 * 2 = ".concat(multi));
        }
        else if (i === 3) {
            var division = 16 / 2;
            console.log("16 / 2 = ".concat(division));
        }
    }
};
func();
