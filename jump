// how far the ball moves every time

var ballY = 350;

var speedY = 0;     // Changed speed to 0 from 3.  TH

//Jumping

var draw = function( ) {

    // If the key is pressed, we want to make the ball

    // jump until it reaches the endpoint, if and only
    //  if the ball is not moving, eg speedY  is 0.

    if (keyIsPressed && speedY === 0) { 

        speedY = 3;                    

    }                                   

    background(202, 255, 97);

    fill(66, 66, 66);

    rect(-2, 371, 410, 107);

    ballY = ballY - speedY;

    ellipse(10,ballY,30,30);

    ballY = ballY - speedY;

     if(ballY > 350) {

       speedY = speedY * 0;
    }

    if(ballY < 200) {

         speedY = speedY * -1;

    }

};



 
