// const array = [1,3,5,7,9,]

// const evenArray = array.map(a=>a+1)

// console.log(evenArray)

// const array2 = []
// for(const num of array){
//     const evenArray2 = num +1
//     array2.push(evenArray2)
// }

// console.log(array2)

const array = [33, 50, 78, 79, 90, 101, 30]

const result = array.filter(a => a % 10 === 0)
const result2 = array.find(a => a % 10 === 0)
console.log(result)
console.log(result2)