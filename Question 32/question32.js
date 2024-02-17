var current_userName = ['Mudassir', 'Anas', 'Muzammil', 'Usama'];
var new_userName = ['Mudassir', 'Sultan', 'Muzammil', 'Abdul samad'];
var comparision = function () {
    for (var i = 0; i < current_userName.length; i++) {
        if (current_userName[i] === new_userName[i]) {
            console.log('the person will need to enter a new username');
        }
        else {
            console.log('the username is available');
        }
    }
};
comparision();
