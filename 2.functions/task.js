'use strict';

function getArrayParams(...arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let sum = arr.reduce((sum, current) => sum + current);
	let avg = +((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return arr.reduce((sum, current) => sum + current);
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i += 1) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	if (countEvenElement === 0) {
		return 0;
	}
	return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);
	for (let i = 0; i < arrOfArr.length; i += 1) {
		const result = func(...arrOfArr[i]);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}