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

//cactus parameters
var senorImg = getImage("avatars/leafers-ultimate");
var senorX1 = 0;//bottom left corner
var senorX2 = 0;//bottom right corner
var senorY1 = 0;//top left corner
var senorY2 = 0;//top right corner
var speedX = 0;//speed of movement of X coordinate
var speedY = 0;//speed of movement of Y coordinate

//barrel parameters
var barrelImg = getImage("cute/BrownBlock");
var barrelX1 = 0;//bottom left corner
var barrelX2 = 0;//bottom right corner
var barrelY1 = 0;//top left corner
var barrelY2 = 0;//top right corner
var barrelmove = 1;//speed of the barrel's movement

var draw = function() {
    if(!sunIsUp){
        fill(1, 5, 79); // night sky 
        rect(0,0,400,100); 
        fill(255, 255, 255);
        ellipse(80, 20, 15, 15); //stars 
        for(var s = 0; s<30; s++){
            ellipse(random(0,400), random(0,100), 3,2);
        }
     }
    else{
        background(255, 255, 255); //day sky 
        fill(101, 222, 252);
        rect(0,0,400,100);
        fill(238, 255, 0);
        ellipse(40,30,30,30);
    }
      
    
    count = count +1;
    if(count >= 900){
        sunIsUp = !sunIsUp;
        count = 0;
        
        
    }
    
  
   for(var k =0; k<2; k++){
        mountain(z+x1[k], z+x2[k], z+x3[k]);
        mountain(z2+x1[k], z2+x2[k], z2+x3[k]); //what? *** 
    }
    z = z-2;
    z2 = z2-2;
    if(z <= -405){
        z = 400;
    }
    if(z2 <= -405){
        z2 = 400;
    }
        fill(212, 164, 42);
    rect(0,100,500,400);
   
 
    fill(33,33,33);
    rect(0,305,400,50);
    road(330);
    fill(112, 122, 122);
    rect(0, 300, 400, 5);
    
  var showflower = function (flower){ 

var flower = true; 
var playing = true;

        if(flower){
            if(playing){
                }
        }
        
        
        if(flower===true){
         var x = 130; 
         var y = 30;
         var s = 2; 
            noStroke ();
            fill(245, 101, 207);
            ellipse(186-x, 146-y, 27-s, 27-s);
            ellipse(210-x, 147-y, 27-s, 27-s);
            ellipse(219-x, 128-y, 27-s, 27-s);
            ellipse(211-x, 111-y, 27-s, 27-s);
            ellipse(187-x, 111-y, 27-s, 27-s);
            ellipse(177-x, 130-y, 27-s, 27-s);
            fill(255, 252, 204);
            ellipse(199-x, 129-y, 30, 30);




        }

};

showflower();
 
    };


  //draw function

 //draw function



   // ->Senor Cactus avoids obstacles (var senorImg, var senorX1, vvar senorX2, var senorY1, var senorY2):
          //-Jumps over barrels, oil (var barrelImg, var barrelX1, var barrelX2, var barrelY1, var barrelY2 / var oilImg, var oilX1, var oilX2, var oilY1, var oilY2)
          
          // how far senor cactus moves every time

    // Changed speed to 0 from 3

//Jumping


    // If the key is pressed, we want to make senor cactus jump until he reaches the endpoint, if and only
    //  if he is not moving, eg speedY is 0.

    if (keyIsPressed && speedY === 0) { 
        speedY = 3;                    
    }                                   

    senorY1 = senorY1 - speedY;

     if(senorY1 > 350) {
       speedY = speedY * 0;
    }

    if(senorY1 < 200) {
         speedY = speedY * -1;
    }


          
//Use jumping code to jump on/ over barrels and oils and intersection code to trigger a block when touching the barrels
              
//intersection function: if the X and Y coordinates of the cactus image intersect the X and Y coordinates of the oil image, then this fucntion is true, if not, this function is false

//barrel is moving
barrelX1 = barrelX1 - barrelmove;
  
  //if cactus touches the left side of the barrel, the barrel will drag him with it unless if he jumps out of the way
  //if he gets dragged out of the screen, game ends, and the background stops moving
  if(senorX2 <= 0){
    //mountain = false;
    //road = false;
  }
  
    var intersectBarrelleft = function(senorX2, barrelX1){
        var doesIntersect = false;
      
        if((senorX1 <= barrelX2 && barrelX1 <= senorX2)){
            doesIntersect = true;
        }
        else{
            doesIntersect = false;
        }
     return doesIntersect;
   };
   
   if (intersectBarrelleft === true){
        senorX2 = senorX2 - barrelmove; 
   }
   
   var intersectBarrelleft = function(senorX2, barrelX1){
        var doesIntersect = false;
      
        if((senorX1 <= barrelX2 && barrelX1 <= senorX2)){
            doesIntersect = true;
        }
        else{
            doesIntersect = false;
        }
     return doesIntersect;
   };
   
   if (intersectBarrelleft === true){
        senorX2 = senorX2 - barrelmove; 
   }
   
   
    //if the cactus "intersects" the barrel
              
          //-Collects raindrops (var rainImg, var rainX1, var rainX2, var rainY1, var rainY2)
              //Use jumping code and intersection code to trigger the "gain a life" code
      //If touches any of these things, use intersection code, and trigger the "Lose" animation (where image "normal" cactus changes to "dead" cactus while making him fall)
     //If he suceeds, proceed to ending animation. (var progress)
  //Game ends.
