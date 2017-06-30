
var pathNodes = document.querySelectorAll('.path');
console.log("About to animate! : " + pathNodes);
var s = Snap("#logo");
var logoLeft = s.select("#j");
var logoRight = s.select("#r");
var border = s.select("#border");
// var bbox = triangle2.getBBox(); //bounding box, get coords and centre
document.getElementById("logo").style.opacity = 0;
document.getElementById("border").style.opacity = 0;
setTimeout(function() {
loadAnimations();
  setTimeout(function() {
    // border.animate({
    //   r: 50,
    //   fill: "white"
    // }, 2000);
    logoLeft.animate({
      r: 50,
      fill: "white"
    }, 3000);
    logoRight.animate({
      r: 50,
      fill: "white"
    }, 3000);
    setTimeout(function() {
      border.animate({ transform: "none," + border.cx + ',' +
      border.cy + "s3,3," + border.cx + "," + border.cy}, 1000);
    }, 1000); // Path Drawing Time
  }, 2000); // Path Drawing Time
}, 1000);   // Fill Time



// Hiding Content
console.log("Fading In");
$(document).ready(function(){
    /* Scrolling Code */
    setTimeout(function() {
      setTimeout(function() {
        // $('.path').css({fill : 'white', transition: "4.0s"});
      }, 3000);
      setTimeout(function() {
            // Load Background and text
            var $img = "http://res.cloudinary.com/mobewash/image/upload/v1498604418/landing-page-min_pqzgwc.png";
            $('.content').fadeIn(4000);
            $('.landing-text').fadeIn(2000);
            $('.arrow').fadeIn(2000);
              setTimeout(function() {
                $('.landing-page').css('background-image', 'url(' + $img + ')');
                $('.landing-page').fadeIn('slow', 2.3);
              //   $('.landing-page').fadeOut('slow', function()
              //     {
              //         $(this).css('background-image', 'url(' + $img + ')');
              //     }).delay(1000).fadeIn('slow', 1.3);
              }, 2000);
      }, 1000);
    }, 2000);






});

  // $(window).on('load', function(){
  //     var div = $("#divToShowHide");
  //     // var div = document.getElementById('contactLine');
  //     console.log("div is: " + div);
  //     var pos = div.position();
  //     // var pos =  getPosition(div);
  //     pos.top = 1000;
  //     console.log("Position is: " + JSON.stringify(pos, null, 4));
  //     $(window).scroll(function () {
  //       var windowpos = $(window).scrollTop();
  //       console.log("Window Pos is: " + windowpos);
  //          //Now if you scroll more than 100 pixels vertically change the class to AfterScroll
  //          // I am taking 100px scroll, you can take whatever you need
  //       if (windowpos >= (pos.top - 100)) {
  //           div.addClass("after-scroll");
  //           // alert("Worked");
  //       }
  //    });
  // });

function loadAnimations(){
  var i = 0;
  pathNodes.forEach(function animatePath (path){
    i++;
    console.log(i + " : " + JSON.stringify(path, null, 4));
    var length = path.getTotalLength();
    var speed = (i > 1) ? 1.8 : 3.15;   // Ratio of 1 to 1.75 for matching speed
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset ' + speed + 's ease-in-out';
    // Go!
    if(i==1){
      // Timing
      document.getElementById("logo").style.opacity = 1;
    }
    path.style.strokeDashoffset = '0';
  });
}




/* Helper Function */
// Helper function to get an element's exact position
function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    console.log("div again is: " + el);
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;

      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }

    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

// deal with the page getting resized or scrolled
window.addEventListener("scroll", updatePosition, false);
window.addEventListener("resize", updatePosition, false);

function updatePosition() {
  // add your code to update the position when your browser
  // is resized or scrolled
}
