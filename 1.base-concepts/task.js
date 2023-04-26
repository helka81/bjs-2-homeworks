"use strict";

function solveEquation(a, b, c) {
	const discriminant = b ** 2 - 4 * a * c;
	let arr = [];
	if (discriminant < 0) {
		return arr;
	 } else if (discriminant === 0) {
		arr.push(-b / (2 * a));
		return arr;
	} else {
		arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
		arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (typeof percent !== 'number' || typeof contribution !== 'number' || typeof amount !== 'number' || typeof countMonths !== 'number') {
		return false;
	}
  const monthlyInterestRate = percent / 100 / 12;
  const bodyOfCredit = amount - contribution;
  const monthlyPayment = bodyOfCredit * (monthlyInterestRate + monthlyInterestRate / ((1 + monthlyInterestRate) ** countMonths - 1));
  const totalAmount = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalAmount;
}
