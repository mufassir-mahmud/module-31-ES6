const product = [
    {id: 1, name: 'lenovo', price: 65000},
    {id: 2, name: 'dell', price: 45000},
    {id: 3, name: 'hp', price: 55000},
    {id: 4, name: 'mac', price: 145000}
]


const names = product.map(product => product.name);
console.log(names);
 product.forEach(p => console.log(p.id))



const expensive = product.filter(p => p.price > 50000);
console.log(expensive);

const afforadable = product.find(p => p.price <50000);
console.log(afforadable);

const total = product.reduce((acum, current) => acum + current.price, 0);
console.log(total);