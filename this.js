// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const mufa = new Person('Mufassir', 21);
// console.log(mufa);

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//   }
//   sleep(){
//     console.log(`is sleeping now ${this.name} `);
//   }
// }

// const mufa = new Person('Mufassir', 21);
// console.log(mufa);
// mufa.sleep();
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`${this.name} is sleeping now`);
    }
}

const mufa = new Person('Mufassir', 21);
console.log(mufa);
mufa.sleep()

const ohin = new Person('Ohin', 21);
console.log(ohin);
ohin.sleep()