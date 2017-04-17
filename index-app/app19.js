var a = prompt("Enter 1st string");
var b = prompt("Enter 2nd string");

if (a.length === b.length) {
 document.write(a+" is equal to "+b);
}

else if (a.length > b.length) {
 document.write(a+" is greater than "+b);
}

else if (a.length < b.length) {
 document.write(a+" is less than "+b);
}