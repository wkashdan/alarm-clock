# Alarm Clock App

This application was written in full by Will Kashdan

You can see a demo at [http://wkashdan.com/alarm-clock/](http://wkashdan.com/alarm-clock/)

## Introduction

This application is a vanilla Javascript ES5 application that does not have any front-end dependencies. The application features a simple design with a clock that updates every second. It uses a web worker for the timing mechanism. The user can enter a time for an alarm to go off. The user is then notified when the clock gets to that time. 

## Build/Usage Instructions

If you already have SASS and the node http-server module installed globally on your computer you can run this project with

```
npm run start
```

If you do not have SASS on your computer, you can install SASS, or use an online SASS compiler (I included the compiled css just in case).

If the SASS code is compiled and located at styles/styles.css you can launch this application with any basic server from the root directory of this project. 

Then visit [http://localhost:3000](http://localhost:3000)

## Demo

The application is also available at [http://wkashdan.com/alarm-clock/](http://wkashdan.com/alarm-clock/)

## Next Steps

I plan to make change to this project at some point to include the following features

- Check if alarm is already in list, prevent duplicates

- Remove alarm after it goes off

- Responsive Design: I decided to go with a mobile first approach, but I'd like to alter the CSS to adapt to larger screen sizes

- Data Encapsulation: Because of the time constraint, I did not worry about adequately encapsulating data and functionality

- Alarm Sorting: implement a sorting function so that alarms are order by when they will go off, there is no sorting implemented

- Dismissible alert: I'd like the user to be able to manually dismis the alarm rather than only display the alert for 5 seconds

- Data Persistance: I'd like to store the alarm data using the browser localStorage API (or indexedDb) so that if the user comes back in the same browser they will still see alarms set

- User should be able to delete alarms: currently there is no way to delete the alarms unless the page is refreshed.