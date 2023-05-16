// define functions in this file
var boxClass = 'movingDiv';

function outputBox(num){
    document.write("<div class='movingDiv' id='div1'>");
    document.write("This is div 1");
    document.write("</div>");
    var box = "<div class='" + boxClass + "' id='div" + num + "'>";
    box += "This is div " + num;
    box += "</div>";
    return box;
}

console.log(box);
