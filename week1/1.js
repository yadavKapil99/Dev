let name = "Kapil"; // Variable that can be reassigned
const age = 25; // Constant variable that cannot be reassigned
var isStudent = true; // Variable declared with var, can be reassigned and has function scope

// age = 12;  This will throw an error because age is declared as a constant

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

let user = {
  name: "Kapil",
  age: 25,
  isStudent: true,
};

// Both of these will access the name property of the user object
console.log(user.name);
console.log(user["name"]);

const users = [
  { name: "Kapil", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 22 },
];

const user1 = users[0];
const user2age = users[1].age;

// Create a funaction that takes an array of objects as input ,
// and returns the users whose age > 18  and are male

const inputUsers = [
  { name: "Kapil", age: 25, gender: "male" },
  { name: "Alice", age: 30, gender: "female" },
  { name: "Bob", age: 22, gender: "male" },
  { name: "Charlie", age: 17, gender: "male" },
  { name: "Diana", age: 19, gender: "female" },
];

const filterUsers = (users) => {
  let arr2 = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18 && users[i].gender === "male") {
      arr2.push(users[i]);
    }
  }
  return arr2;
};

console.log(filterUsers(inputUsers));
