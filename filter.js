const numbers = [41,52,33,44,55,26,17]
// const result = numbers.filter(p => p> 80);
// console.log(result);

const result = numbers.filter(p => p % 2 === 0);
console.log(result);

const friends = ['mufassir', 'ohin', 'omar', 'mehedi']

const oddFriend = friends.filter(odd => odd.length > 6);
console.log(oddFriend);