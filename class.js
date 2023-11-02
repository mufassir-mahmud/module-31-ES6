const product = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 55000},
    {id: 4, name: 'mac', price: 145000}
]

class Product{
    country = 'Bangladesh';
    constructor(name){
        this.name = name
    }
    speak(talk){
        console.log(`Talking About ${talk}`);
    }
}
const lenovo = new Product('to sudhar jao');
// lenovo.speak('kiya koilen')
// console.log(lenovo);

class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
    lecture(){
        console.log('Sir Is Teaching');
    }
}

const tapon = new Teacher('Tapon sir', 'Physics');
console.log(tapon);
const rashid = new Teacher('Rashid Sir', "Chemestry");
console.log(rashid);