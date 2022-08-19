//Program 1
let user = null;
user = {
    name: 'John',
    surname: 'Mike'
};
console.log(user['name'] + " " + user['surname']);
user['name'] = 'Peter';
console.log(user['name'] + " " + user['surname']);
delete user['name'];
console.log(user['name'] + " " + user['surname']);

//Program 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var total=0;
Object.values(fruit).forEach(function(value){
    total+=value;
});
console.log(total)