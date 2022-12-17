// For this requirement
// The average of the changes in Profit/Losses over the entire period.
// You will need to track what the total change in profits is from month to month and then find the average.
// (Total/Number of months)
// The bottom data point should read
// (Total/Number of records)
// So in this case, we would have
// (Total/(Number of months - 1))

// Because there will be one fewer change than there are data points.

// For example, if the profit/loss were
// 110
// 50
// 125
// Then the month-over-month changes would be
// -60 (from the first month to the second month... 50 - 110)
// 75 (from the second month to the third month... 125 - 50)
// And the average of those would be
// (-60 + 75)/2   or 7.5
// Dividing by 2 because there are two changes (-60 and 75) even though there are three months of data.
// So, generally, when calculating the average, you can divide the sum of the changes by (months - 1).
// ALSO!
// The requirement says:
// The greatest decrease in losses (date and amount) over the entire period.
// It should say:
// The greatest decrease in profits (date and amount) over the entire period

// An example of calculating the average change over the first 5 months.
// var finances = [
// ['Jan-2010', 867884], // A
// ['Feb-2010', 984655], // B
// ['Mar-2010', 322013], // C
// ['Apr-2010', -69417], // D
// ['May-2010', 310503]  // E
// To calculate the average change, I need to
// 1. calculate the change from month to month
// 2.    .... for each month
//     First change is B - A: 984655 - 867884 =  116771
//     Next  change is C - B: 322013 - 984655 = -662642
//     Next  change is D - C: -69417 - 322013 = -391430
//     Next  change is E - D: 310503 - -69417 =  379920
// 3. Add all those changes together
// 116771 + -662642 + -391430 + 379920 = -557381
// 4. Divide by the total number of changes I calculated
// -557381 / 4 = -139345.25





// Financial Analysis
// ----------------------------
// Total Months: 86
// Total: $38382578
// Average  Change: $-2315.12
// Greatest Increase in Profits: Feb-2012 ($1926159)
// Greatest Decrease in Profits: Sep-2013 ($-2196167)




// var sum = 0;
// for( var i = 0; i < elmt.length; i++ ){
//     sum += parseInt( elmt[i], 10 ); //don't forget to add the base
// }

// var avg = sum/elmt.length;

//document.write( "The sum of all the elements is: " + sum + " The average is: " + avg );