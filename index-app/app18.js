var a = ["cake", "apple pie", "cookie", "chips", "patties"];
var b = prompt("Bakery Items Availability");
var x = b.toLowerCase();
for(var i = 0; i < a.length; i++){
    if (x === a[i]){
    
    if (x === a[0])  {
        c = (a[0].replace(/cake/gi,"Cake"));
   document.write(c+" is availablie at index "+i+" in our bakery");
  
}
    else if (x === a[1]) {
        d = (a[1].replace(/apple pie/gi,"Apple Pie"));
        document.write(d+" is availablie at index "+i+" in our bakery");
}
   else if (x === a[2]) {
        e = (a[2].replace(/cookie/gi,"Cookie"));
        document.write(e+" is availablie at index "+i+" in our bakery");
}
   else if (x === a[3]) {
        f = (a[3].replace(/chips/gi,"Chips"));
        document.write(f+" is availablie at index "+i+" in our bakery");
}
   else if (x === a[4]) {
        g = (a[4].replace(/patties/gi,"Patties"));
        document.write(g+" is availablie at index "+i+" in our bakery");
}
else{
    document.write("Not Available")
}
}
}
