// the list of users is not empty
let usernames:string[] = ['admin','Eric','Maxwell','Babar'];
for(let i = 0; i<=usernames.length; i++){
    if(usernames[i] ==='admin'){
        console.log(`Hello ${usernames[i]}, would you like to see a status repor?`);
    }
    if(usernames[i] === 'Eric'){
        console.log(`Hello ${usernames[i]}, welcome back!`);
    }
   if(usernames[i] === 'Maxwell'){
    console.log(`Hello ${usernames[i]}, nice to see you!`);
   }
   if(usernames[i] === 'Babar'){
    console.log(`Hello ${usernames[i]}, how are you doing today?`);
   }
}
//the list of users is empty
usernames = [];
if(usernames.length > 0){
    console.log("usernames is not empty");
}

else{
    console.log('We need to find some users!');
}
