// button
document.getElementById("btnCalc").addEventListener("click", buildSchedule)

function calcPayment(amount, rate, term) {
  return (amount * rate) / (1 - Math.pow(1 + rate, -term));
}

// calculate the interest for the current balance of the loan
function calcInterest(balance, rate) {
  return balance * rate;
}

// this will build the loan schedule
function buildSchedule() {
  // get the values from inputs
  let amount = parseFloat(document.getElementById("amount").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let term = parseFloat(document.getElementById("term").value);

  // convert the input rate to a monthly rate
  rate = rate / 1200;
  // calculate the payments

                                                  
// step 1 setup varialbes that hold values in the schedule
  let payment = calcPayment(amount, rate, term)
  let balance = amount; 
  let totalInterest = 0;
  let monthlyPrincipal = 0;
  let monthlyInterest = 0;
  let monthlyTotalInterest = 0;


   // write the results to our table
  let scheduleBody = document.getElementById("scheduleBody")
  let scheduleRow = "";
  // reset the table
  scheduleBody.innerHtml = "";

  for (month = 1; month <= term; month++){
    monthlyInterest = calcInterest(balance, rate);
    totalInterest += monthlyInterest;
    monthlyPrincipal = payment - monthlyInterest;
    balance = balance - monthlyPrincipal;

    // write these values to the table
    scheduleRow = `<tr>
    <td>${month}</td>
    <td>${payment.toFixed(2)}</td>
    <td>${monthlyPrincipal.toFixed(2)}</td>
    <td>${monthlyInterest.toFixed(2)}</td>
    <td>${totalInterest.toFixed(2)}</td>
    <td>${balance.toFixed(2)}</td></tr>`;
    
    scheduleBody.innerHTML += scheduleRow;
  }
    document.getElementById("payment").innerHTML = Number(payment).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    document.getElementById("totalPrincipal").innerHTML = Number(amount).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    document.getElementById("totalInterest").innerHTML = Number(totalInterest).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });

    let totalCost = Number(amount) + totalInterest;

    document.getElementById("totalCost").innerHTML = Number(totalCost).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
  
};
// first hook the inputs values from html

// // calculations

// function calculate() { 
// // Total Monthly Payment = (amount loaned) * (rate/1200) / (1 – (1 + rate/1200)  (-Number of Months) )
// let amount = parseFloat(document.getElementById("amount").value);
// let term = parseFLoat(document.getElementById("term").value);
// let rate = parseFloat(document.getElementById("rate").value) / 100;
// let monthPay = (amount) * (rate / 1200) / (1 - Math.pow((1 + rate / 1200), - term))
// // Interest Payment = Previous Remaining Balance * rate / 1200Principal Payment = 
// // Remaining Balance = Previous Remaining Balance - principal payments

// // Remaining Balance before the very first month equals the amount of the loan.


// // Total Monthly Payment - Interest Payment At end each month, 



// // need a for loop to run through each month and add interest while lessoning the remaining balance. 

// for (month = 0; month <= term; month++){
  
//   let principal = monthPay - interest;
  
//   let interest = amount * rate / 1200;
    
//   monthInterest += interest



  
