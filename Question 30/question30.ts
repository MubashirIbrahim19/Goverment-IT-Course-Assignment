let usernames:string[] = ['admin','Eric','Maxwell','Babar','Rizwan','Fakhar'];
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
   if(usernames[i] === 'Rizwan'){
    console.log(`Hello ${usernames[i]},thank you for logging in again.`);
   }
   if(usernames[i] === 'Fakhar'){
    console.log(`Hello ${usernames[i]},thank you for logging `);
   }
}