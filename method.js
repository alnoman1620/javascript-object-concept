///Object method property///
const student = {
    id: 404,
    name:"Noman",
    balance: 4000,
    major: 'CSE',
    subjects: ['math','Algo','Stats'],
    language:{frontend: 'HTML CSS JS', backend:'MongoDB, NodeJS'},
    isPro: true,
    takeExam: function(){
        console.log(this.name, 'take the exam')
    },
    writeLanguage: function(){
        console.log(this.language.backend, 'these are the main language')
    },
    newBalance: function(expense){
        this.balance = this.balance - expense;
        return this.balance;
    }
}
student.takeExam()
student.writeLanguage()
const remain = student.newBalance(1000);
const remain2 = student.newBalance(500);
console.log(remain2)