var controllerOptions = {enableGestures: true};
var sound=document.getElementById('csound');
var sound2=document.getElementById('dsound');
var sound3=document.getElementById('bsound');
var element=document.getElementById('plate');
var container=document.getElementById('drum');
var container_bell=document.getElementById('bell');
var container_minion=document.getElementById('minion');
container_minion.style.visibility='hidden';
var ckitty=document.getElementById('minion');
var cminion=document.getElementById('minion1');
cminion.style.visibility='hidden';
//element.style.visibility='hidden';
//container_bell.style.visibility='hidden';



function go(){
	rotate(element);
	sound.play();
	//element.style.visibility='visible';
	//container.style.visibility='hidden';
	//container_bell.style.visibility='hidden';
	container_minion.style.visibility='visible';
	linear(ckitty);
cminion.style.visibility='hidden';
	//container_minon.hideImage();

}

function go2(){
	drum(container);
	sound2.play();
	//container_bell.style.visibility='hidden';
	//element.style.visibility='hidden';
	//container.style.visibility='visible';
	container_minion.style.visibility='visible';
	cminion.style.visibility='hidden';
	linear(ckitty);
}
function go3(){
	rotate2(container_bell);
	sound3.play();
	//container_bell.style.visibility='visible';
	//element.style.visibility='hidden';
	//container.style.visibility='visible';
	container_minion.style.visibility='hidden';

	cminion.style.visibility='visible';
	linear1(cminion);
}
function rotate2(container_bell) {
 // var container = document.getElementById('stack');
  t =
snabbt(container_bell, 'attention', {
  rotation: [0, 0, Math.PI/2],
  springConstant: 1.9,
  springDeceleration: 0.9,
});

console.log("done");
}
function linear1(cminion){
var i=1;
snabbt(cminion, {
  valueFeeder: function(i, matrix) {
    var x = -Math.sin(i*Math.PI);
    return matrix.rotateZ(Math.sin(6*i*Math.PI)).translate(x*300, 0, 0);
  },
  duration:1050
});
}
function linear(ckitty){
var i=1;
snabbt(ckitty, {
  valueFeeder: function(i, matrix) {
    var x = -Math.sin(i*Math.PI);
    return matrix.rotateZ(Math.sin(i*Math.PI)).translate(x*600, 0, 0);
  },
  duration:1050
});
}
function rotate(element) {
 // var container = document.getElementById('stack');
  t =
snabbt(element, 'attention', {
  rotation: [0, 0, Math.PI/2],
  springConstant: 2.9,
  springDeceleration: 1.9,
});

console.log("done");
}

function drum(container) {
snabbt(container, 'attention', {
  position: [0, 50, 0],
  springConstant: 2.4,
  springDeceleration: 0.9,
});
}
Leap.loop(controllerOptions, function(frame) {
console.log("in loop");
  // Display Gesture object data
  if (frame.gestures.length > 0) {
    for (var i = 0; i < frame.gestures.length; i++) {
      var gesture = frame.gestures[i];
      if(gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if(isHorizontal){
			swipeDirection = "left";
              		if(frame.hands[0].type === "right")	{	
                 		go3();
					
                 		console.log("hello2");
						
	

				}
              
          } else { //vertical
              if(gesture.direction[1] > 0){
                  swipeDirection = "up";
                  
          		} 
          		else {
              	 swipeDirection = "down";
              		if(frame.hands[0].type === "right")	{	
                 		go();
					
                 		console.log("hello");

              		} 
              		else{
              				go2();
					
              				console.log("hey");
	
              			}                 
          			}
          console.log(swipeDirection)

       			}	
		
     	}

  }
// sleep(1000);
}

});


