//Senor Cactus game outline:

  //Game starts:
   // ->Background starts moving (Use moving background code / var backgroundposition, var backgroundwidth)

noStroke();//no outline
var mountain = function(x1, x2, x3){
    fill(199, 167, 40);
    triangle(x1, 100, x2, 100, x3, 18);
}; //mountain depends on position

var road = function(y){
    fill(173, 133, 59);
    rect(0, y, 400, 2);
}; //draw a grey road

var z = 0; // closeness of mountains 
var x1 = [5, 205]; // left side of mtn 
var x2 = [200, 400]; // right side of mtn 
var x3 = [100, 300]; // top of mtn 
//parameters of mountains
var z2 = -405; // closeness of mtns 

var sunIsUp = true;
var count = 0;
var draw = function() {
    if(!sunIsUp){
        fill(1, 5, 79); // night sky 
        rect(0,0,400,100); 
        fill(255, 255, 255);
        ellipse(80, 20, 15, 15); //stars 
        for(var s = 0; s<30; s++){
            ellipse(random(0,400), random(0,100), 2,2);
        }
     }
    else{
        background(255, 255, 255); //day sky 
        fill(138, 237, 232);
        rect(0,0,400,100);
        fill(238, 255, 0);
        ellipse(40,30,30,30);
        fill(255, 255, 255);
    }

    for(var k =0; k<2; k++){
        mountain(z+x1[k], z+x2[k], z+x3[k]);
        mountain(z2+x1[k], z2+x2[k], z2+x3[k]); //what? *** 
    }
    z = z+1;
    z2 = z2+1;
    if(z >= 400){
        z = -405;
    };
    if(z2 >= 400){
        z2 = -405;
    };
        fill(204, 162, 47);
    rect(0,100,500,400);
  
    fill(33,33,33);
    rect(0,305,400,50);
    road(330);
    fill(112, 122, 122);
    rect(0, 300, 400, 5);
    };
    count = count +1;
    if(count >= 900){
        sunIsUp = !sunIsUp;
        count = 0;
    };
  //draw function



   // ->Senor Cactus avoids obstacles (var senorImg, var senorX1, vvar senorX2, var senorY1, var senorY2):
          //-Jumps over barrels, oil (var barrelImg, var barrelX1, var barrelX2, var barrelY1, var barrelY2 / var oilImg, var oilX1, var oilX2, var oilY1, var oilY2)
          
          // how far senor cactus moves every time

var senorImg = senorcactusImg.jpg;
var senorX = 0;
var senorY = 0;
var speedX = 0;
var speedY = 0;     // Changed speed to 0 from 3

//Jumping

var draw = function( ) {

    // If the key is pressed, we want to make senor cactus jump until he reaches the endpoint, if and only
    //  if he is not moving, eg speedY is 0.

    if (keyIsPressed && speedY === 0) { 
        speedY = 3;                    
    }                                   

    senorY = senorY - speedY;

     if(senorY > 350) {
       speedY = speedY * 0;
    }

    if(senorY < 200) {
         speedY = speedY * -1;
    }
};

          
              //Use jumping code to jump on/ over barrels and oils and intersection code to trigger a block when touching the barrels
              
              
              
          //-Collects raindrops (var rainImg, var rainX1, var rainX2, var rainY1, var rainY2)
              //Use jumping code and intersection code to trigger the "gain a life" code
      //If touches any of these things, use intersection code, and trigger the "Lose" animation (where image "normal" cactus changes to "dead" cactus while making him fall)
     //If he suceeds, proceed to ending animation. (var progress)
  //Game ends.
