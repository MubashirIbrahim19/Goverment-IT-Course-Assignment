let student:{Name:string,F_Name:string,Education:string,Id:number} = {
    Name : 'Mubashir',
    F_Name : 'Ibrahim',
    Education : 'Intermediate',
    Id : 12345,

}
for(let key in student){
    console.log(`${key} : ${student[key]}`);

}