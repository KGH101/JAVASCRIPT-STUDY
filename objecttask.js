console.log("DADcdedwedwededwedwd")

// Create a new file called objectTask and attempt the below questions:
// my_object= [23, “Jane”, 560, [“Lesson”, “Maths”, {“currency” : “KES”}],
// 987, 76,”John”]
// Display:
// 1. KES
// 2. 560
// 3. Math

my_object= [23, "Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}],
987, 76,"John"]
console.log(my_object[3][2].currency)

// display 560

console.log(my_object[2])

// display math

console.log(my_object[3][1])


// add another key “amount” with value 90
my_object[3][2]["amount"]=90;
console.log(my_object)

// Reverse 987 to 789 using an inbuilt -methods or Assigning 789 manually.
// Hint: arrays can be reversed using reverse() functions

//console.log(my_object[4])
//let b =my_object[4].toString();
//split_num= b.split("")
//reversed_num= split_num.reverse()
//result= reversed_num.join('')
//console.log(result)


//conver to a string
    my_object[4]= my_object[4].toString
//split to an array
    my_object[4]= my_object[4].split('')
//reverse the array
    my_object[4]= my_object[4].reverse()
// join the string
    my_object[4]= my_object[4].join('')
// convert back to number
    my_object[4]=Number(my_object[4])
    console.log(my_object[4])




// Change the name “John” to “Jane” .
my_object[6]= "Jane"
console.log(my_object )
