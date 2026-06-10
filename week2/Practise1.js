const a = {
  name: "John",
  address: {
    city: "Delhi"
  }
};

const b = {...a};   // shallow copy   ---> means b is taking reference of a

b.address.city = "Mumbai";    //  change in b reflects in a also because of the shallow copy

console.log(a.address.city); 
console.log(b.address.city);
// Both answer is Mumbai 


// To make the Deep copy
const c = structuredClone(a);  // Deep copy  ---> means c is not taking reference of a, it is creating a new object in memory

c.address.city = "Bangalore";  // Change in c does not reflect in a because of the deep copy
