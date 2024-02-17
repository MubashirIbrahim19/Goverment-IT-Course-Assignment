var student = {
    Name: 'Mubashir',
    F_Name: 'Ibrahim',
    Education: 'Intermediate',
    Id: 12345,
};
for (var key in student) {
    console.log("".concat(key, " : ").concat(student[key]));
}
