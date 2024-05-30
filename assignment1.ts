//Task1
//Task: Create a program that manages a simple friend list.

// Step 1: Define the Friend type
type Friend = {
    firstName: string;
    lastName: string;
    id?: string;
};

// Step 2: Define the people object with an empty friends array
let people: { friends: Friend[] } = {
    friends: []
};

// Step 3: Create three friend objects
let friend1: Friend = {
    firstName: "Mubahila",
    lastName: "Batool",
    id: "mubahilabatool198",
};

let friend2: Friend = {
    firstName: "Momal",
    lastName: "Rana",
};

let friend3: Friend = {
    firstName: "Tehreem",
    lastName: "Ali",
    id: "tahreem1947"
};

// Step 4: Add these friend objects to the friends array within the people object
people.friends.push(friend1, friend2, friend3);

// Step 5: Output the entire people object to the console
console.log(people);

//Task2
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2,2);
let rearrangeWords=[scrambledArray[5], scrambledArray[2], scrambledArray[3], scrambledArray[0], scrambledArray[1], scrambledArray[4]];
let sentence =rearrangeWords.join(' ');
console.log(sentence);

//Task3
type product={
    name:string,
    model:string,
    cost:string,
    quantity:string,
} 
let inventory:product[]=[];

const product1 :product = {
    name:"iPhone",
    model:"15pro max",
    cost:"275k pkr",
    quantity:"50",
}

const product2 :product={
    name:"car",
    model:"Audi Q5",
    cost:"$43,300 USD",
    quantity:"35",
}

const product3 : product={
    name:"Apple watch",
    model:"Series 7",
    cost:"$279 USD",
    quantity:"100",
}
inventory.push(product1,product2,product3);
console.log(inventory);
console.log(inventory[1].model);
console.log(inventory[2].name);
console.log(inventory[0].cost);

//Task4

interface Student{
    name:string,
    seniorStatus:boolean,
    completeAssignment:boolean,
}

let students: Student[]=[
 {name:"rabia",seniorStatus:true,completeAssignment:false},
 {name:"amna",seniorStatus:true,completeAssignment:true},
 {name:"laraib",seniorStatus:true,completeAssignment:false},
 {name:"maria",seniorStatus:true,completeAssignment:false},
 {name:"ufairah",seniorStatus:true,completeAssignment:true},
];
console.log(students);

function seniorStudents(students:Student[]) {
   return students.filter(student=>student.seniorStatus && student.completeAssignment===true)    
}
console.log(seniorStudents(students));

 function removeStudents(student:Student[]) {
     return students.filter(student=>student.completeAssignment===false)
 }
 console.log(removeStudents(students));
