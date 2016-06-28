
// Return the first element with this class name.
var findFirstClass = function(className){
    return document.getElementsByClassName(className)[0];
};

var main = function(){
    var container = findFirstClass("container");
    var draggable = findFirstClass("draggable");
    // When the mouse moves in the container, reposition the image.
    container.onmousemove = function(e){
        var x = (e.clientX - (draggable.width));
        var y = (e.clientY - (draggable.height/2));
        draggable.style.left = x + "px";
        draggable.style.top  = y + "px";
    };
};

window.onload = main;
