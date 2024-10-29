// Write a program that takes input of someone's basic salary and benefits, adds them to find the gross salary then uses  the gross salary to find the NHIF. 
// To find the Kenya NHIF Rate using THIS LINK:  

// fuction to calculate gross salary


function calc_gross_salary(basic_salary, benefits){

    gross_salary= basic_salary + benefits
    return gross_salary

}
basic_salary = Number(prompt("Enter Basic Salary: "))
benefits = Number(prompt("Enter Benefits: "))
let answer= calc_gross_salary(basic_salary,benefits)
console.log("The gross salary is: " +answer)


function get_nhif(gross_salary){
    let nhifContribution=0

    if (gross_salary <= 5999) {
        nhifContribution = 150;
    } else if (gross_salary <= 7999) {
        nhifContribution = 300;
    } else if (gross_salary <= 11999) {
        nhifContribution = 400;
    } else if (gross_salary<= 14999) {
        nhifContribution = 500;
    } else if (gross_salary <= 19999) {
        nhifContribution = 600;
    } else if (gross_salary <= 24999) {
        nhifContribution = 750;
    } else if (gross_salary <= 29999) {
        nhifContribution = 850;
    } else if (gross_salary <= 34999) {
        nhifContribution = 900;
    } else if (gross_salary <= 39999) {
        nhifContribution = 950;
    } else if (gross_salary <= 44999) {
        nhifContribution = 1000;
    } else if (gross_salary <= 49999) {
        nhifContribution = 1100;
    } else if (gross_salary <= 59999) {
        nhifContribution = 1200;
    } else if (gross_salary <= 69999) {
        nhifContribution = 1300;
    } else if (gross_salary <= 79999) {
        nhifContribution = 1400;
    } else if (gross_salary <= 89999) {
        nhifContribution = 1500;
    } else if (gross_salary <= 99999) {
        nhifContribution = 1600;
    } else {
        nhifContribution = 1700;
    }
    
    return nhifContribution;

}

let nhif = get_nhif(gross_salary)
console.log("NHIF CONTRIBUTION: " +nhif);

// Continue with the program above, then use  the gross salary to find the NSSF. 
//  To find the Kenya NSSF Rate  using 6% of the Gross Salary. BUT ONLY A MINIMUM OF 18,000 Gross Salary CAN BE USED IN NSSF. 

// function get_nssf(gross_salary){

//      let min_salary = 18000;
    
//      let applicable_salary = Math.min(gross_salary, min_salary);
     
//      let nssf_contribution = applicable_salary * 0.06;
     
//      return nssf_contribution;
// }
// let nssf= get_nssf(gross_salary)
// console.log("NSSF CONTRIBUTION: " +nssf)

function get_nssf(a){
    let nssf_contribution=0
    if (a>=0 && a<=18000){
        nssf_contribution= a*0.06
    }else{
        nssf_contribution=18000*0.06
    }
    return nssf_contribution

}

let nssf= get_nssf(gross_salary)
console.log("NSSF CONTRIBUTION: " +nssf)


// Continue with the same program and calculate an individual’s NHDF using:
//  i.e NHDF = gross_salary *  0.015

function get_nhdf(gross_salary){

    let nhdf_contribution = gross_salary * 0.015;

    return nhdf_contribution;

}
let nhdf= get_nhdf(gross_salary)
console.log("NHDF: " +nhdf)



// Calculate the taxable income.
// i.e taxable_income = gross salary - (NSSF + NHDF + NHIF) 

function get_taxable_income(gross_salary,nssf,nhdf,nhif){
    let taxable_income = gross_salary - (nssf,nhdf,nhif)

    return taxable_income;
}

let taxable_income = get_taxable_income(gross_salary, nssf, nhif, nhdf)
console.log("Taxable Income: " +taxable_income)

// Continue with the same program and find the person's PAYEE using the taxable income above.
// Find the Kenya PAYEE Tax Rate using THIS LINK
// Less Relief 

// First Ksh 24,000: Taxed at 10%
// Next Ksh 8,333: Taxed at 25%
// Income exceeding Ksh 32,333 up to Ksh 800,000: Taxed at 30%
// Income above Ksh 800,000: Taxed at 35%

// function get_payee(taxable_income){
//    let first_limit = 24000
//    let second_limit = 32333
//    let first_rate = 0.1
//    let second_rate = 0.25
//    let third_rate = 0.30


//    if (taxable_income <= first_limit){
//         payee = taxable_income * first_rate

//    }
        
//     else if (taxable_income <= second_limit){
//         payee = (first_limit * first_rate) + ((taxable_income - first_limit) * second_rate)
//     }
        
//     else{
//         payee= (first_limit * first_rate) + ((second_limit - first_limit) * second_rate) + ((taxable_income - second_limit) * third_rate)

//     }
        

//     return payee

// }

// payee = get_payee(taxable_income)
// console.log("PAYEE: " +payee)

function get_payee(tax,relief){
    let payee=0
    if (tax>=0 && tax<=24000){
        payee=0
    }else if (tax>24000 && tax<=32333){
        payee=(24000*0.1)+((tax-24000)*0.25)
    }
    else if (tax>32333 && tax<=500000){
        payee=(24000*0.1)+(8333*0.25)+((tax-32333)*0.30) - relief
    }
    else if (tax>500000 && tax<=800000){
        payee=(24000*0.1)+ (8333*0.25) +(467667*0.30)+((tax-500000*0.325)) - relief
    
    }
    else{
        (tax>800000 && tax<=1600000)
        payee=(24000*0.1)+ (8333*0.25) +(467667*0.30)  +(300000*0.325)+((tax-800000*0.35))- relief
    }
     
}

let payee= get_payee(taxable_income)
console.log("PAYEE: " +payee)





// Continue with the same program and calculate an individual’s Net Salary using:
//  net_salary = gross_salary - (nhif + nhdf +  nssf + payee)

function Net_Salary(gross_salary,nhif,nhdf,nssf){

    net_salary= gross_salary - (nhif + nhdf +  nssf + payee)
    return net_salary


}

net_salary= Net_Salary(gross_salary,nhif,nhdf,nssf)
console.log("NET SALARY: " + net_salary)


