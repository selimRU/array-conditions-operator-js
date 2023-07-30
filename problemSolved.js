var me = 85;
var tom = 66;
var jane = 95;
var peter = 40;
// problem-1
// me
if (me >= 80) {
    console.log('my result is A');

}
else if (me <= 60) {
    console.log('B');
}
else if (me <= 50) {
    console.log('C');
}
else if (me <= 40) {
    console.log('D');
}
else if (me <= 39) {
    console.log('F');
}
else {
    console.log('absent');
}

// tom
if (tom >= 80) {
    console.log('tom is  A');

}
else if (tom >= 60) {
    console.log('tom is B');
}
else if (tom <= 50) {
    console.log('tom is C');
}
else if (tom <= 40) {
    console.log('tom is D');
}
else if (tom <= 39) {
    console.log('tom is F');
}
else {
    console.log('tom is absent');
}

// problem-2

var num1 = 17;
var num2 = 45;
var num3 = 75;

if (num1 > num2) {
    console.log('num1 largest');
}

else if (num1 > num3) {
     console.log('num1 largest');
}
else if (num2 > num3) {
    console.log('num2 largest');
}
else if (num3 > num1) {
    console.log('num3 largest');
}
else {
    console.log('num1 or num2 largest');
}
