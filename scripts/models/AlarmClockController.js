/*
AlarmClockController Class
	
	Attributes:
		- app: AlarmClockApp Object
		- view: AlarmClockView Object
	Method:
		- setPeriodBtnListener
		- setAlarmFormListener
		- setClockWorkerListener
*/
function AlarmClockController(app, view){
	this.app = app;
	this.view = view;
}

//Consumes: DOM element containing periodBtns
AlarmClockController.prototype.setPeriodBtnListener = function(el) {
	el.addEventListener('click',function(event) {
		event.preventDefault();
		this.view.setSelectedPeriodBtn(event.target);
		this.app.selectedPeriod = event.target.value;
	}.bind(this));
}

//Consumes: Alarm form DOM element
AlarmClockController.prototype.setAlarmFormListener = function(el) {
	el.addEventListener('submit', function(event) {
		event.preventDefault();
		var hour = parseInt(event.target.alarmHour.value);
		var min = parseInt(event.target.alarmMinute.value);
		var period = this.app.selectedPeriod;
		var newAlarm = new Alarm(hour, min, period);
		if(newAlarm.isValid()) {
			this.app.addAlarm(newAlarm);
			this.view.setAlarmView(this.app.alarms);
		} else {
			this.view.showAlert('Please Enter Valid Inputs');
		}
	}.bind(this));
}

// Consumes: clockWorker 
AlarmClockController.prototype.setClockWorkerListener = function(worker) {
	worker.addEventListener('message', function(event){
		this.app.setClock(event.data);
		this.view.setClockView(this.app.clock);
		if(this.app.clock.date.getSeconds() === 0 && this.app.checkAlarms()) {
			this.view.showAlert('Ring! Your alarm just went off!');
		}
	}.bind(this))
}
