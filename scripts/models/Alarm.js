/*
Alarm Class
	
	Preconditions: must pass in a valid hour, minute and period
	Attributes:
		- date: a Date object that has the correct hour and minute of the alarm
	Methods:
		- equals
		- toString
		- isValid
*/
function Alarm(hour, min, period) {
	this.hour = hour;
	this.min = min;
	this.date = new Date();

	hour === 12 && period === 'am' ?
		this.date.setHours(0) :
	hour === 12 && period === 'pm' ?
		this.date.setHours(12) :
	period === 'pm' ? 
		this.date.setHours(hour + 12) : 
		this.date.setHours(hour);
	this.date.setMinutes(min);
	this.date.setSeconds(0);
}

/*
Consumes: a Date Object
Returns: boolean
*/
Alarm.prototype.equals = function(date) {
	return date.getHours() === this.date.getHours() && 
		date.getMinutes() === this.date.getMinutes();
}

//Returns: time string
Alarm.prototype.toString = function() {
	return this.date.toLocaleTimeString('en-US');
}

//Returns: boolean if horu and min are valid
Alarm.prototype.isValid = function() {
	return this.hour > 0 
		&& this.hour < 13 
		&& this.min > -1
		&& this.min < 60
}