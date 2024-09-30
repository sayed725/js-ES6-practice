const arr = [10, 20, 30, 40, 50]




const brr = [5,15,25,30,40]

const marge = [...arr,...brr]
const maxx = Math.max(...marge)
console.log(maxx)


// const result = (arr) => {
//     const square = arr.map(a => a ** 2);
//     const sum = square.reduce((sum, a) => sum + a, 0);
//     const avrage = sum / arr.length;
//     return avrage;
// }
// const arr = [10, 20, 30, 40, 50]
// const result2 = result(arr)
// console.log(result)