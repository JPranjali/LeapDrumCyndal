var controllerOptions = {enableGestures: true};
var counter =1;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

Leap.loop(controllerOptions, function(frame) {

  // Display Gesture object data
  if (frame.gestures.length > 0) {
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];
      if(gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if(isHorizontal){
              if(gesture.direction[0] > 0){
                  swipeDirection = "right";
                  //document.getElementById("audio"+counter).stop();
                  
              } else {
                  swipeDirection = "left";
                 // document.getElementById("audio"+counter).stop();
                 
              }
          } else { //vertical
              if(gesture.direction[1] > 0){
                  swipeDirection = "up";
                  counter++;
                  if(counter==6)
                    counter=1;
                  document.getElementById("audio").src='song'+counter+'.mp3';
                  document.getElementById("audio").play();
                  console.log(counter);
              } else {
                  swipeDirection = "down";
                   counter--;
                  if(counter==0)
                    counter=5;
                  document.getElementById("audio").src='song'+counter+'.mp3';
                  document.getElementById("audio").play();
                  console.log(counter);
                  console.log("i am here");
              }                  
          }
          console.log(swipeDirection)

       }
     }
  }
// sleep(1000);
});