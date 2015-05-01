window.TO_DEG = 180 / Math.PI;

	// Set up the controller:
	Leap.loop({background: true}, {

    hand: function(hand){

      var d1 = hand.indexFinger.proximal.direction(),
        d2 = hand.middleFinger.proximal.direction();

      var angle = Math.acos(Leap.vec3.dot(d1, d2));
      //console.log(Math.abs(angle));
      if(angle>1)
        angle=1;
      document.getElementById('audio').volume=Math.abs(angle);
      var cross = Leap.vec3.create();
      Leap.vec3.cross(cross, d1, d2);

      var dir = Leap.vec3.dot(hand.palmNormal, cross);
      //console.log("direction:"+dir);
      if (dir < 0) {
        angle *= -1;
      }

     // output_rad.innerHTML = (angle ).toPrecision(2) + ' rad';
     // output_deg.innerHTML = (angle * TO_DEG).toPrecision(2) + '°';

     // progress.style.width = angle * 100 + '%';
	}
  });