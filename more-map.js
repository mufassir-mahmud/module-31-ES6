const numbers = [11,22,33,44,55];

const doubled = numbers.map(num => num *2);
console.log(doubled);

const fiveAdded = numbers.map(num => num + 5);
console.log(fiveAdded);

const halfs = numbers.map( num => num/2);
console.log(halfs);

const friends = ['mufassir', 'ohin', 'omar', 'mehedi']

const lengths = friends.map(friends => friends.length);
console.log(lengths);