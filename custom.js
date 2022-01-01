//MOVING TITLE
(function(){

//Init
var container = document.getElementById('container');
var inner = document.getElementById('inner');

//Mouse
var mouse = {
    _x:0,
    _y:0,
    x:0,
    y:0,
    updatePosition: function(event){ 
        var e = event || window.event;
        this.x = e.clientX - this._x; 
        this.y = (e.clientY - this._y) * -1;
    }, 
    setOrigin: function(e){ 
        this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
      },
      show: function() { return '(' + this.x + ', ' + this.y + ')'; }
    };

    mouse.setOrigin(container);

//Update
var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};


// Update 2?

var update = function(event){ 
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight/2).toFixed(2),
      (mouse.x / inner.offsetWidth/2).toFixed(2)
    );
  };
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;

})();

// MOVING TITLE END 

//Scroll Movement 
window.onscroll = function(){scrollFunction()};

function scrollFunction() {
let image = document.querySelector("#cowboyImg");
  if (document.body.scrollTop >= 0) {
    image.style.transform = "translateY(50px;)";
  }
}
