// get element form to Js
let form = document.getElementById("myformhtml");
// get the element table to Js 
let table= document.getElementById("Data_table");
let my_table= document.getElementById("Data_table")


 // add an event
    
 form.addEventListener('submit', function(e) {
    // Prevent form submission/ prevent from refreshing
    e.preventDefault(); 
        
    // Capture form input values/ get form data
    let firstName = document.getElementById('name1').value;
    let lastName = document.getElementById('name2').value;
    let email= document.getElementById('email').value;
  

    // check if user has inputed some data
    // use required attribute

    //
        
     // Create a new row and cells for each input
    let new_row = my_table.insertRow()
    let First_NameCell = new_row.insertCell(0)
    let Last_NameCell = new_row.insertCell(1)
    let emailCell = new_row.insertCell(2)
        
    // Assign input values to the respective cells
    First_NameCell.textContent=firstName;
    Last_NameCell.textContent=lastName;
    emailCell.textContent=email;
        
     // clear the form after submission
        form.reset();
    });

   // check if user has inputed some data using if sttement
   //  if (firstName.length===0 || lastName.length===0 || email.length===0){
   //    document.getElementById("error").innerHTML="insert all inputs"
   // }else{
   //     // Create a new row and cells for each input
   //  let new_row = table.insertRow();
   //  let First_NameCell = new_row.insertCell(0)
   //  let Last_NameCell = new_row.insertCell(1)
   //  let emailCell = new_row.insertCell(2)
        
   //  // Assign input values to the respective cells
   //  First_NameCell.textContent=firstName;
   //  Last_NameCell.textContent=lastName;
   //  emailCell.textContent=email;
        
   //   // clear the form after submission
   //      form.reset();
   // }
     
