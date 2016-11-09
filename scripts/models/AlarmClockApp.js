/*
AlarmClockApp Class

	Attributes:
		- clock: Clock Object
		- alarms: Array of Alarm Objects
		- selectedPeriod: 'am' or 'pm'
	Methods:
		- setClock: sets clock from Date object
		- addAlarm: adds an Alarm Object to array
		- checkAlarms: checks the alarm array for an alarm equal to clock time

*/

//Clock.js must be laoded prior to callign this constructor
function AlarmClockApp() {
	this.clock = new Clock();
	this.alarms = [];
	this.selectedPeriod = 'am';
}

// Consumes: Date Object
AlarmClockApp.prototype.setClock = function(date) {
	this.clock.date = date;
}

//Consumes: Alarm object
AlarmClockApp.prototype.addAlarm = function(alarm) {
	this.alarms.push(alarm);
}

/*
Purpose: to check alarms array for alarm equal to clock time
Returns: boolean
*/
AlarmClockApp.prototype.checkAlarms = function() {
	var ring = false;
	this.alarms.forEach(function(alarm) {
		if(alarm.equals(this.clock.date))
			ring = true;
	}, this);
	return ring;
}