const inputOne = document.getElementById("inputOne");
const inputTwo = document.getElementById("inputTwo");
const display = document.getElementById("display");
const btn = document.getElementById("btn");

let fruits = ["apple", "banana", "grapes", "pineapple", "kiwi", "orange"]
console.log(fruits)

btn.addEventListener("click", () => { 
    const result = fruits.slice(inputOne.value, inputTwo.value)
    display.innerHTML = result;
    console.log(result);
})

