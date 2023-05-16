
/* add code here */

var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");
document.write(daysOfWeek+"<br/>");
document.write("<table border=1>");
document.write("<tr>");
for(var i=0; i < daysOfWeek.length; i++){
    if(daysOfWeek[i].lenght < 4)
        day = daysOfWeek[i];
    else
        day = '<em>' + daysOfWeek[Í] + "</em>";
    document.write("<th>" + day + "<th>");
}
document.write("</tr>");
document.write("</table>");