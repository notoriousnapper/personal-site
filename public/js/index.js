var pathNodes = document.querySelectorAll('.path');
console.log("About to animate! : " + pathNodes);
var i = 0;


    loadAnimations();
    console.log("Fading In");

function loadAnimations(){
  pathNodes.forEach(function animatePath (path){
    i++;
    console.log(i + " : " + JSON.stringify(path, null, 4));
    // console.log("Paths are: " + path);
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
