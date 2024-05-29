"use strict";

function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = Math.pow(b, 2) - 4 * a * c ;

  if (discriminant < 0) {
      return arr;
  } else if (discriminant === 0) {
      arr.push(-b / (2 * a));
      return arr;
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a)); 
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a)); 
    return arr;
  };

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentMonth = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (percentMonth + (percentMonth / ((Math.pow(1 + percentMonth, countMonths))-1)));
  let totalAmount = payment * countMonths;
  return +totalAmount.toFixed(2);
}
