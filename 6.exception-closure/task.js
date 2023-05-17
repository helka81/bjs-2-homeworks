function parseCount(string) {
	let result = Number.parseFloat(string);
	if (isNaN(result)) {
		throw new Error('Невалидное значение');
	}
	return result;
};

function validateCount(string) {
	try {
		let result = parseCount(string);
		return result;
	} catch (error) {
		return error;
	}
};

class Triangle {
	constructor(sideA, sideB, sideC) {
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;


		if (this.sideA + this.sideB <= this.sideC || this.sideA + this.sideC <= this.sideB || this.sideB + this.sideC <= this.sideA) {
			throw new Error('Треугольник с такими сторонами не существует');
		};
	};
	get perimeter() {
		return this.sideA + this.sideB + this.sideC;
	};

	get area() {
		let halfPerimeter = this.perimeter / 2;
		let area = Math.sqrt(halfPerimeter * (halfPerimeter - this.sideA) * (halfPerimeter - this.sideB) * (halfPerimeter - this.sideC));
		return parseFloat(area.toFixed(3));
	};
};

function getTriangle(sideA, sideB, sideC) {
	try {
		let triangle = new Triangle(sideA, sideB, sideC);
		return triangle;
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	};
};