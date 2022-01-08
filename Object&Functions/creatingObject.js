//Function constructor
let aperson = {
    name : 'Roy',
    yearOfBirth : 1990,
    job : 'SE'
}
var Person = function(name,yearOfBirth,job) {
this.name = name;
this.yearOfBirth = yearOfBirth;
this.job = job;

}
Person.prototype.showOccupation = function() {
    console.log(this.job);
}



let John = new Person('John',1990,'teacher');
let Marrie = new Person('Marrie',1990,'Chef');
//console.log(John);
John.showOccupation();
Marrie.showOccupation();
//See the prototype property for more information
console.log(John.__proto__)