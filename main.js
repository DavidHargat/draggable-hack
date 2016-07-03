
// Return the first element with this class name.
var findFirstClass = function(className) {
    return document.getElementsByClassName(className)[0];
};

var main = function() {
    var container = findFirstClass("container");
    var draggable = findFirstClass("draggable");
    var ROOT = document.documentElement;

    /*
    draggable.

    draggable.getLeft = function() {
        return 
            draggable.getBoundingClientRect().left - 
            ROOT.getBoundingClientRect().left;
    };

    draggable.getTop = function() {
        return
            draggable.getBoundingClientRect().top -
            ROOT.getBoundingClientRect().top;
    };
*/
    draggable.draggable = false;

    container.onmousemove = function( mouseEvent ) {
        if( draggable.isDragging ) {
          var mx = mouseEvent.pageX,
              my = mouseEvent.pageY,
              dx = draggable.startPos.x,
              dy = draggable.startPos.y;
          
          var x = mx - dx;
          var y = my - dy;

          draggable.style.left = x + "px";
          draggable.style.top  = y + "px";
        }
        return false;
    };

    document.onmousedown = function( mouseEvent ) {
        var pos = draggable.getBoundingClientRect();
        draggable.isDragging = true;
        draggable.startPos = {
          x: pos.left + mouseEvent.pageX, 
          y: pos.top + mouseEvent.pageY
        };
        return false;
    };

    document.onmouseup = function( mouseEvent ) {
        draggable.isDragging = false;
        draggable.endPos = {x: mouseEvent.pageX - pos.left, y: mouseEvent.pageY - pos.right };
        return false;
    };
};

window.onload = main;

