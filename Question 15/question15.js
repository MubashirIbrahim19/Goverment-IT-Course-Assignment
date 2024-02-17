var invites = ['Siddique', 'Sultan', 'Abdul Samad'];
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
