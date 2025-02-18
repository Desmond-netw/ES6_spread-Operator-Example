// using spread to merge object

const person = { name: "Bubu", age: 25};

const position = {role: "Developer"};

const profile ={...person};

const  fullprofile= {...person, ...position};

console.log (profile);
console.table(fullprofile);