var invites = ['Siddique', 'Sultan', 'Abdul Samad', 'Mudassir'];
console.log(' Initial invitations');
for (var _i = 0, invites_1 = invites; _i < invites_1.length; _i++) {
    var invite = invites_1[_i];
    console.log("\"".concat(invite, ", would you come for dinner at my place tonight?\""));
}
console.log('\n');
console.log(" Someone can't make it");
var absent_guest = ['Siddique', 'Sultan'];
console.log("Unfortunately, ".concat(absent_guest, " can't make it to the dinner."));
console.log('\n');
// Replace the guest who can't make it with a new guest
var newGuest = ['Anas', 'Usama'];
for (var i = 0; i <= absent_guest.length; i++) {
    var guest = invites.indexOf(absent_guest[i]);
    if (guest != -1) {
        invites[guest] = newGuest[i];
    }
}
console.log('\n');
console.log('Second set of invitations');
for (var _a = 0, invites_2 = invites; _a < invites_2.length; _a++) {
    var invite = invites_2[_a];
    console.log("\"".concat(invite, ", would you come for dinner at my place tonight?\""));
}
invites.unshift('Zarhan');
invites.splice(3, 0, 'Haq nawaz');
invites.push('Muzammil');
console.log('\n');
console.log('Updated invitations with new guests');
for (var _b = 0, invites_3 = invites; _b < invites_3.length; _b++) {
    var invite = invites_3[_b];
    console.log("\"".concat(invite, ", you found a bigger dinner table.\""));
}
console.log('\n');
for (var i = 7; i > 2; i--) {
    var removedGuest = invites.pop();
    console.log("Sorry, \"".concat(removedGuest, "\", I can't invite you to dinner."));
}
console.log('\n');
console.log('Final invitations');
for (var _c = 0, invites_4 = invites; _c < invites_4.length; _c++) {
    var invite = invites_4[_c];
    console.log("\"".concat(invite, ", you're still invited to dinner.\""));
}
console.log('\n');
for (var i = 2; i > 0; i--) {
    var removedGuest = invites.pop();
    console.log("Sorry, \"".concat(removedGuest, "\", I can't invite you to dinner."));
}
console.log('\n');
console.log(invites, "this list is empty");
