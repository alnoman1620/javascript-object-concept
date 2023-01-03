// //Use bind to borrow method from another object
// const sourav = {
//     id: 101 ,
//     money: 500,
//     name : 'sourav',
//     expense : function(cost){
//     this.money = this.money - cost;
//     console.log(this)
//     return this.money;
//     }
// }
// sourav.expense(200)
// const noman = {
//     id:102,
//     money: 1000,
//     name:'noman'
    
// }
// const abdullah = {
//     id:103,
//     money: 1800,
//     name:'abdullah'
    
// }
// const abdullahExpense = sourav.expense.bind(abdullah)
// const nomanExpense = sourav.expense.bind(noman)
// nomanExpense(100)
// abdullahExpense(300)

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

const twoName2 = addName1.twoName.bind(addName2)
twoName2('atika','mamun')