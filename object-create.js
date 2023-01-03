// Different way to Create Object

// Using object literal
const student = {name:'Noman',age:24,job:'freelancer'}

//Constructor
const person = new Object()
// console.log(person)

//
const human = Object.create(student)
// console.log(human.name)

//Inharitance Class
class People {
    name;
    age;
    job = 'Software Engineering';

constructor (name,age){
this.name = name;
this.age = age;
}
}
const studentDetails = new People('Sourav',40)
const studentDetails2 = new People('Noman',24)
console.log(studentDetails2)

//Function as class
function MyPeople(name){
    this.name = name;
}
const myMan = new MyPeople('Abdullah')
console.log(myMan)