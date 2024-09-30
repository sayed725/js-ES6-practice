// const instructor = [
//     {name:'nodi',age:28, position:'senior'},
//     {name:'akil',age:26, position:'junior'},
//     {name:'sobuj',age:30, position:'senior'},
// ]


// const result = instructor.filter(i=>i.position === 'senior')

// console.log(result)

const people = [
    {name:'mena',age:20},
    {name:'rina',age:15},
    {name:'tina',age:22}
]

const result = people.reduce((p,c)=>p+c.age,0)
console.log(result)