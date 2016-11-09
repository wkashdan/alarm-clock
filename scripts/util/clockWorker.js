//Web Worker
//posts new Date Object to main thread every second
function oneSecondTimer() {
	setTimeout(function() {
		postMessage(new Date());
		oneSecondTimer();
	}, 1000);
}

oneSecondTimer();