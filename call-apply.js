//Difference between bind, call and apply
const addName1 = {
    id:1,
    name:'',
    twoName: function(first,second){
        this.name = first +' '+ second;
        console.log(this)
        return this.name;
    }
}
addName1.twoName('sourav','bhuiyan')

const addName2 = {
    id: 2,
    name:'',
}
//bind
const twoName2 = addName1.twoName.bind(addName2)
twoName2('atika','mamun')

//call
const addName3 = {
    id: 3,
    name:'',
}
addName1.twoName.call(addName3, 'afrin','sultana')

//apply
const addName4 = {
    id: 4,
    name:'',
}
addName1.twoName.apply(addName4,['shuly','akter'])