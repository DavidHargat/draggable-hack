(function(){
var draghack = function( dragElement ) {
    var container = dragElement.parentElement;
    var state = {
        mouse: {y: 0, x: 0},
        element: {y: 0, x: 0},
        isDragging: false
    };

    var strToNum = function( str ){
        var num = parseInt(str.replace("px", ""));
        return isNaN(num) ? 0 : num;
    };

    var handleMouseMove = function( mouseEvent ) {
        var mx = mouseEvent.pageX,
            my = mouseEvent.pageY,
            dx = state.mouse.x,
            dy = state.mouse.y,
            sx = state.element.x,
            sy = state.element.y;

        if( state.isDragging ) {
            var x = (sx + mx - dx);
            var y = (sy + my - dy);
            dragElement.style.left = x + "px";
            dragElement.style.top = y + "px";
        }
    };

    var handleMouseDown = function( mouseEvent ) {
        state.isDragging = true;
        state.mouse.x = mouseEvent.pageX;
        state.mouse.y = mouseEvent.pageY;
        state.element.x = strToNum(dragElement.style.left);
        state.element.y = strToNum(dragElement.style.top);
        mouseEvent.preventDefault();
        return false;
    };

    var handleMouseUp = function( mouseEvent ) {
        state.isDragging = false;
    };

    dragElement.style.position = "relative";
    window.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
};
var loadHack = function(){
    var elements = document.getElementsByClassName("draghack");
    for(var i = 0; i < elements.length; i++) {
        draghack(elements[i]);
    }
};
window.addEventListener("load", loadHack);
})();
