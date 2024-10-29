console.log("jsonobjects")

let person={
    "name": "Arnold",
    "age": 24,
    "city": "New York"
}
console.log(person.city.toUpperCase())
console.log(person["name"])


// adding properties to an object
person["skills"]= ["plumbing","swimming", [20,30,40], "coding"]
console.log(person["skills"][2][2])
// add an array of skills
// modifying values

person["name"]="Fergie"
console.log(person)

//method
//keys = used to display all keys in an object

console.log(Object.keys(person))

// values = displays all the values in an object

console.log(Object.values(person))

// entries = used to display both the key and value inside an array
console.log(Object.entries(person))


