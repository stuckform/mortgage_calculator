// button
document.getElementById("calculate").addEventListener("click", calculate)

// first hook the inputs values from html
let amount = parseFloat(document.getElementById("amount").value);
let term = parseFLoat(document.getElementById("term").value);
let rate = parseFloat(document.getElementById("rate").value) / 100;
// calculations

function caculate() { 
// Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)  (-Number of Months) )
let monthPay = (amount) * (rate / 1200) / (1 - Math.pow((1 + rate / 1200), - term))

// Interest Payment = Previous Remaining Balance * rate / 1200Principal Payment = 
// Remaining Balance = Previous Remaining Balance - principal payments

// Remaining Balance before the very first month equals the amount of the loan. What is left.
let balance = amount;


// Total Monthly Payment - Interest PaymentAt end each month, 
let interest = balance * rate / 1200;


let principal = monthPay - interest;

// need a for loop to run through each month and add interest while lessoning the remaining balance. 

  for (month = 0; month <= term; month++){

      
  }

















}