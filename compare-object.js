// const first = {a:1}
// const second = {a:1}


// if(first === second){
//     console.log('objects are equal')
// }
// else{
//     console.log('objects are not equal')
// }

// compare object property are equal or not 
const first = {a:1, b:2} 
const second = {b:2, a:1}

function objectCompare(obj1,obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop] ){
            return false;
        }
    }
    return true;
}
const objects = objectCompare(first,second)
console.log(objects)