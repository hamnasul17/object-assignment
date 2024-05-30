//Task1
//Task: Create a program that manages a simple friend list.
// Step 2: Define the people object with an empty friends array
var people = {
    friends: []
};
// Step 3: Create three friend objects
var friend1 = {
    firstName: "Mubahila",
    lastName: "Batool",
    id: "mubahilabatool198",
};
var friend2 = {
    firstName: "Momal",
    lastName: "Rana",
};
var friend3 = {
    firstName: "Tehreem",
    lastName: "Ali",
    id: "tahreem1947"
};
// Step 4: Add these friend objects to the friends array within the people object
people.friends.push(friend1, friend2, friend3);
// Step 5: Output the entire people object to the console
console.log(people);
//Task2
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
var rearrangeWords = [scrambledArray[5], scrambledArray[2], scrambledArray[3], scrambledArray[0], scrambledArray[1], scrambledArray[4]];
var sentence = rearrangeWords.join(' ');
console.log(sentence);
var inventory = [];
var product1 = {
    name: "iPhone",
    model: "15pro max",
    cost: "275k pkr",
    quantity: "50",
};
var product2 = {
    name: "car",
    model: "Audi Q5",
    cost: "$43,300 USD",
    quantity: "35",
};
var product3 = {
    name: "Apple watch",
    model: "Series 7",
    cost: "$279 USD",
    quantity: "100",
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log(inventory[1].model);
console.log(inventory[2].name);
console.log(inventory[0].cost);
var students = [
    { name: "rabia", seniorStatus: true, completeAssignment: false },
    { name: "amna", seniorStatus: true, completeAssignment: true },
    { name: "laraib", seniorStatus: true, completeAssignment: false },
    { name: "maria", seniorStatus: true, completeAssignment: false },
    { name: "ufairah", seniorStatus: true, completeAssignment: true },
];
console.log(students);
function seniorStudents(students) {
    return students.filter(function (student) { return student.seniorStatus && student.completeAssignment === true; });
}
console.log(seniorStudents(students));
function removeStudents(student) {
    return students.filter(function (student) { return student.completeAssignment === false; });
}
console.log(removeStudents(students));
