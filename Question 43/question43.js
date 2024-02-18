// @ts-ignore
var make_great = function () {
    var mugicians = ['Alex', 'Lily', 'Max', 'Zoe'];
    console.log('Orginal Mugucians');
    for (var i = 0; i < mugicians.length; i++) {
        console.log("".concat(mugicians[i]));
    }
};
var show_mugicians = function () {
    var new_mugicians = ['Alex', 'Lily', 'Max', 'Zoe'];
    console.log(' Mugucians with the Great');
    for (var i = 0; i < new_mugicians.length; i++) {
        console.log("".concat(new_mugicians[i], " the Great"));
    }
};
make_great();
show_mugicians();
