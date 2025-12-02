// let func = () => {
//     return a = "hello"
// }
// console.log(func())

const person = [
    {
        name: {
            firstName : "shrijan",
            lastName : "shrestha"
        },
        age: 20,
        occupation: "student"
    },
    {
        name: {
            firstName : "sachin",
            lastName : "mali"
        },
        age: 21,
        occupation: "student"
    },
    {
        name: {
            firstName : "pranil",
            lastName : "barahi"
        },
        age: 22,
        occupation: "student"
    },
]

for (let i = 0; i < person.length; i++) {
    console.log(`my name is ${person[i].name.firstName + " " + person[i].name.lastName } and I am ${person[i].age} years old `);
}
