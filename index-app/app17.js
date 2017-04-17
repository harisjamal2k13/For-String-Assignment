
var a = prompt("Enter name withou (@,.!) character");
var b = ["@", ".", "," ,"!"];

 var matchFound = false;
 for (var i = 0; i <= a.length; i++)
 for (var j = 0; j < b.length; j++) 
 if (a.charAt(i) === b[j]) {
 matchFound = true;
 alert("Enter Valid Username");
 break;
 
 }
 if (matchFound === false) {
 alert(a);
 }