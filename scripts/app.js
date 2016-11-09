/*

This file defines a main method and 
runs it when the DOM loads

*/

document.onreadystatechange = function () {

	//define main method
	function main() {

		//get required DOM elements
		var timeBox = document.getElementById('timeBox');
		var alarmBox = document.getElementById('alarmBox');
		var alertBox = document.getElementById('alertBox');
		var selectedPeriodBtn = document.getElementById('amBtn');
		var periodBtns = document.getElementById('periodBtns');
		var alarmForm = document.getElementById('alarmForm');

		//init Data Models
		var app = new AlarmClockApp();
		var view = new AlarmClockView(timeBox, alarmBox, alertBox, selectedPeriodBtn);
		var controller = new AlarmClockController(app, view);
		
		//set initial view
		view.setClockView(app.clock);

		//set event listeners
		controller.setPeriodBtnListener(periodBtns);
		controller.setAlarmFormListener(alarmForm);

		//initialize worker
		var clockWorker = new Worker('scripts/util/clockWorker.js');
		controller.setClockWorkerListener(clockWorker);
		
	}

	//run main method when DOM loads
	if (document.readyState === "interactive") {
		main();
	}
}



