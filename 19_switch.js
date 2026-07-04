// We will learn switch cases here. the syntax is like this:

let day = 2

switch (day) { // the day here is key variable which we are checking
    case 1:
        console.log("Today is sunday");
        break; // this breaks the loop and exits the switch case. if we do not use break then the next all cases will be executed.


    case 2:
        console.log("Today is monday");
       break;

    default: // if no cases match then this default value is executed.
        console.log('Day not found');
        
}

// we can also use string values in switch case.



let days = "sunday"

switch (days) { // the days here is key variable which we are checking
    case "sunday":
        console.log("Today is sunday");
        break; // this breaks the loop and exits the switch case. if we do not use break then the next all cases will be executed.


    case "monday":
        console.log("Today is monday");
       break;

    default: // if no cases match then this default value is executed.
        console.log('Day not found');
}