//Setting and Swapping 
var myNumber = 42;
var myName = "Egzona"

var temp = myNumber;
myNumber = myName;
myName = temp;

//Print -52 to 1066 
for (let i = -52; i <= 1066; i++) {
    console.log(i);
}

//Function 
function beCheerful()
{
    var counter = 0;
    while (counter < 98) {

        console.log("Good morning!");

        counter++;
    }

}
beCheerful();

//Multiples of Three - but Not All 
for (let i = -300; i <= 0; i++) {
    if (i % 3 == 0 && i != -3 && i != - 6) {
        console.log(i);
    }
}

//Printing Integers with While 
var number = 2000;
while (number <= 5280) {
    console.log(number);
    number++;
}

//Leap Year 
var year = prompt('Write a year that you think can me a leap year');

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log('It is a leap year');
}
else {
    console.log('It is not a leap year');
}

//Print and Count 
var counter = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        console.log(i + 'is multiple with 5');
        counter++
    }
}
console.log('between 512 and 4096 was ' + counter + ' numbers multiples of 5');


//Multiples of Six
var number = 6;
while (number <= 60000) {
    if (number % 6 == 0) {
        console.log(number);
    }
}

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for (let i = 1; i <= 100; i++) {

    console.log(i);

    if (i % 10 == 5) {
        console.log('Coding');
    } else
        if (i % 5 == 0) {
            console.log('Coding');
        }
}