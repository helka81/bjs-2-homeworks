function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marks) {
	if (this.marks) {
		this.marks.push(...marks);
		console.log("Оценки успешно добавлены.");
	} else {
		console.log("Студент отчислен и не может получать оценки.");
	}
}

Student.prototype.getAverage = function() {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}
	let sum = this.marks.reduce(function(total, mark) {
		return total + mark;
	}, 0);
	return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
}
let student1 = new Student("Василиса", "женский", 19);
let student2 = new Student("Артём", "мужской", 25);