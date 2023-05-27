class AlarmClock {
	constructor() {
		this.alarmCollection = []; //свойство для хранения коллекции звонков
		this.intervalId = null; //для хранения id таймера
	};

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		};

		if (this.alarmCollection.some(obj => obj.time === time)) {
			console.warn('Уже присутствует звонок на это же время');
		};

		this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	};

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(obj => obj.time !== time);
	};

	getCurrentFormattedTime() {
		return `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`;
	};

	start() {
		if (this.intervalId !== null) {
			return;
		};

		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach((element) => {
				if (element.time === currentTime && element.canCall) {
					element.canCall = false;
					element.callback();
				}
			});
		}, 1000);
	};

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	};

	resetAllCalls() {
		this.alarmCollection.forEach((element) => {
			element.canCall = true;
		});
	};

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	};

};