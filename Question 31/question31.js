// the list of users is not empty
var usernames = ['admin', 'Eric', 'Maxwell', 'Babar'];
for (var i = 0; i <= usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello ".concat(usernames[i], ", would you like to see a status repor?"));
    }
    if (usernames[i] === 'Eric') {
        console.log("Hello ".concat(usernames[i], ", welcome back!"));
    }
    if (usernames[i] === 'Maxwell') {
        console.log("Hello ".concat(usernames[i], ", nice to see you!"));
    }
    if (usernames[i] === 'Babar') {
        console.log("Hello ".concat(usernames[i], ", how are you doing today?"));
    }
}
//the list of users is empty
usernames = [];
console.log(usernames);
