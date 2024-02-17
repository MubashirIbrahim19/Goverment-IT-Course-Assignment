let invites: string[] = ['Siddique', 'Sultan', 'Abdul Samad','Mudassir'];
console.log(' Initial invitations');
for (let invite of invites) {
    console.log(`"${invite}, would you come for dinner at my place tonight?"`);
}


console.log('\n');
console.log(" Someone can't make it");
let  absent_guest:string[] = ['Siddique','Sultan'];
console.log(`Unfortunately, ${absent_guest} can't make it to the dinner.`);


console.log('\n');
// Replace the guest who can't make it with a new guest
let newGuest:string[] = ['Anas','Usama'];
for(let i = 0; i<= absent_guest.length; i++){
    let guest = invites.indexOf(absent_guest[i]);
    if(guest != -1){
        invites[guest] = newGuest[i]; 
    }
}


console.log('\n');
console.log('Second set of invitations');
for (let invite of invites) {
    console.log(`"${invite}, would you come for dinner at my place tonight?"`);
}

invites.unshift('Zarhan');

invites.splice(3, 0, 'Haq nawaz');

invites.push('Muzammil');

console.log('\n');
console.log('Updated invitations with new guests');
for (let invite of invites) {
    console.log(`"${invite}, you found a bigger dinner table."`);
}

console.log('\n');
for (let i = 7; i > 2; i--) {
    let removedGuest = invites.pop();
    console.log(`Sorry, "${removedGuest}", I can't invite you to dinner.`);
}

console.log('\n');
console.log('Final invitations');
for (let invite of invites) {
    console.log(`"${invite}, you're still invited to dinner."`);
}

console.log('\n');
for (let i = 2; i > 0; i--) {
    let removedGuest = invites.pop();
    console.log(`Sorry, "${removedGuest}", I can't invite you to dinner.`);
}

console.log('\n');  
console.log( invites,"this list is empty");