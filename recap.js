// 1. var let const
// 2. Default parameter
// 3. Template String
// 4. Arrow Function
// 5. Destructuring and Spread operator
// 6. Keys, values, entries
// 7. for of, for in
const a = 56;
const numbers = [56,66,77]
const person = {
    name: 'Cristiano',

}

const message = `Hi, ${person.name} has a ${a} access to ${numbers[2]}`;
console.log(message);

const square = x => x*x;

const {age, z, ...others} = {x: 2, y: 5, z: 7, name: 'object', age: 21}
