//KEYS
//To find object property name using[Object.keys()]
const bottle = {
    color:'white',
    hold:'water',
    price:50,
    isCleaned:true
}
const keys = Object.keys(bottle)
// console.log(keys)

//Values
//To find object property value using[Object.values()]
const glass = {
    color:'black',
    hold:'liquid',
    price:40,
    isCleaned:true
}
const values = Object.values(glass)
// console.log(values)

//Entries
//To find object property value and name both using[Object.entries()]
const pairs = Object.entries(glass)
// console.log(pairs)


//To seal an object,so than no one can delete any object property[Object.seal(property name)]
Object.seal(bottle)

//To Delete a object property using [delete objectName.propertyName;]
//*****Delete will not work if the object is already sealed, but we can change the property value******
delete bottle.isCleaned;
// console.log(bottle)


//The property of freeze is similler to SEAL but in this case we can not change the property value of an object
Object.freeze(glass)
glass.color = 'red';
// console.log(glass)


