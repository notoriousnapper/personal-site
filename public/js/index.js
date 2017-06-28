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





// Hide Content

// Hiding Content
// $('.content').hide();
console.log("Fading In");
$(document).ready(function(){
    setTimeout(function() {
      setTimeout(function() {
        // $('.path').css({fill : 'white', transition: "4.0s"});
      }, 3000);
      setTimeout(function() {
            var $img = "http://res.cloudinary.com/mobewash/image/upload/v1498604418/landing-page-min_pqzgwc.png";
            $('.content').fadeIn(3000);
            $('.landing-page').fadeTo('slow', 0.3, function()
              {
                  $(this).css('background-image', 'url(' + $img + ')');
              }).delay(1000).fadeTo('slow', 1);
      }, 3000);
    }, 1000);
});

function loadAnimations(){
  document.getElementById("logo").style.opacity = 1;
  var i = 0;
  pathNodes.forEach(function animatePath (path){
    i++;
    if (i==1) return;
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
    path.style.strokeDashoffset = '0';
  });
}
