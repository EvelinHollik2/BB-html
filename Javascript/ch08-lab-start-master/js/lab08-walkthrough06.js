/* add code below this */

var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("<br>typeof stringOne=" + typeof stringOne);
document.write("<br>typeof stringThree=" + typeof stringThree);

if (stringOne == stringTwo)
    document.write("<br>srtingOne has = value to stringTwo");
    
if (stringOne == stringFour)
    document.write("<br>srtingOne has = value to stringFour");

if (stringOne == stringTwo)
    document.write("<br>srtingOne has = value and = tyoe to stringTwo");

if (stringTwo == stringThree)
    document.write("<br>srtingOne has = value and = tyoe to stringThree");

if (stringTwo == stringFour)
    document.write("<br>srtingOne has = value and = tyoe to stringThree");

var dateOne = new Date();
document.write("<p>" + dateOne + "</p>");

doxument.write(Math.PI+"<br/>");
doxument.write(Math.sqrt(4)+"<br/>");
doxument.write(Math.random()+"<br/>");