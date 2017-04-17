var a = prompt("Enter Word in Small Letters");
var b = a.charAt(0).toUpperCase();
var c = a.slice(1);
document.write("User Input: "+a+"<br>");
document.write("Title Case: "+b+c);
