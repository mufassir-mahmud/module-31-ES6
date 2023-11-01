const data = [{id: 1, name: 'abul', address: 
'kochu khet'}];
console.log(data[0].address);
const products = {
    count : 5000,
    data: [
        {id: 1, name: 'lenovo laptop', price: 65000},
        {id: 2, name: 'mackbook', price: 165000}
    ]
}
console.log(products.data[1].name);

const user ={
    id: 5001,
    name: 'Shoriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'Poribag er goli',
            third: 'no dorai'
        }
    },
    city: 'Dhaka'
}
console.log(user.address.street.second);