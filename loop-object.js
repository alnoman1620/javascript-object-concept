// Forloops
/*
for(let i=0 , i<10 , i++){} //Normal for loop
for(const num of numbers){} //Array
for(const prop in student){} //Object
*/
//using loop for object
const student = {
    name:'sourav',
    id:404,
    job:'Software Engineer'
}

// for(const prop in student){
//     console.log(student[prop])
// }

// const keys = Object.keys(student)
// for(const prop of keys){
//     console.log(prop,":",student[prop])
// }

const property = Object.entries(student)
for(const [key,value] of property){
console.log(key,value)
}