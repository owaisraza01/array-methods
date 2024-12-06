const array = [
    42,
    true,
    "Hello, World!",
    {
        name: "John",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!"
];

//Q1
const mapString = array.map(element => element.toString());
console.log(mapString);


//Q2
const filterNumber = array.filter(element => typeof element === "number")
console.log(filterNumber);

//Q3
array.forEach((element, index) => {
    console.log(`Element at index ${index}:`, element);  
})

//Q4
const sumOfArray = array.reduce((a,b) => {
    if(typeof b === "number"){
        return a+b;
    }
    return a
})
console.log(sumOfArray);

//Q5
const findBoolean = array.find(element => typeof element === "boolean");
console.log(findBoolean);

//Q6
const findIndexOfObject = array.findIndex(element => typeof element === "object");
console.log(findIndexOfObject);

//Q7
const checkNumbers = array.some(element => typeof element === "number");
console.log(checkNumbers);

//Q8
const checkString = array.every(element => typeof element === "string");
console.log(checkString);



