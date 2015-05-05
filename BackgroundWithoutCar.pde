noStroke();//no outline
var mountain = function(x1, x2, x3){
    fill(199, 167, 40);
    triangle(x1, 100, x2, 100, x3, 18);
}; //mountain depends on position

    
var road = function(y){
    fill(173, 133, 59);
    rect(0, y, 800, 2);
}; //draw a grey road

//intersection function: if the X and Y coordinates of the cactus image intersect the X and Y coordinates of the oil image, then this fucntion is true, if not, this function is false  
    var doesIntersect = function(rctX1, rctX2, rctY1, rctY2, rct2X1, rct2X2, rct2Y1, rct2Y2){
        var doesIntersect = false;
      
      println("senorXcoordinates " + rctX1 + " " + rctX2);
        println("senorYcoordinates " + rctY1 + " " + rctY2 );
        println("barrelXcoordinates " + rct2X1 + " " + rct2X2);
        println("barrelYcoordinates " + rct2Y1 + " " + rct2Y2);
        
        if(
            ((rctX1 <= rct2X1 && rctX2 >= rct2X1) || (rctX1 >= rct2X2 && rctX2 <= rct2X2)) && 
            ((rctY1 <= rct2Y1-30 && rctY2-30 >= rct2Y1) || (rctY1 >= rct2Y2-30 && rctY2 <= rct2Y2-30))
            ){
            doesIntersect = true;
        }
        else{
            println("false");
            doesIntersect = false;
        }
     return doesIntersect;
   };
 
    
    
//flower function
var showflower = function (flower, playing, flower1Img, flower2Img, flower3Img){ 
var flower = true; 
var playing = true;

        if(flower===true){
        flower1Img = true;
        flower2Img = true;
        flower3Img = true;

        }

};

var z = 0; // closeness of mountains 
var x1 = [5, 205]; // left side of mtn 
var x2 = [200, 600]; // right side of mtn 
var x3 = [100, 500]; // top of mtn 
//parameters of mountains
var z2 = -405; // closeness of mtns 

var sunIsUp = true;
var count = 0;

//cactus parameters
PImage senorImg;

var senorX1 = 20;//bottom left corner
var senorX2 = senorX1 + 125;//bottom right corner
var senorY1 = 400;//top left corner
var senorY2 = senorY1 + 125;//top right corner
var senorwidth = 125;
var senorheight = 125;
var speedX = 0;//speed of movement of X coordinate
var speedY = 0;//speed of movement of Y coordinate

//barrel parameters
PImage barrelImg;
var barrelX1 = 371;//bottom left corner
var barrelX2 = barrelX1 + 50;//bottom right corner
var barrelY1 = 430;//top left corner
var barrelY2 = barrelY1 + 90;//top right corner
var barrelwidth = 50;
var barrelheight = 90;
var barrelmove = 2 ;//speed of the barrel's movement

//rain parameters
PImage rainImg;
var rainX1 = 200;
var rainX2 = rainX1 + 50;
var rainY1 = 20;
var rainY2 = rainY1 + 60;
var rainmove = 1;
var rainwidth = 50;
var rainheight = 60;

//flower1 parameters
PImage flower1Img;
var flower1X = 650;
var flower1Y = 557;
var flower1width = 30;
var flower1height = 30;

//flower2 parameters
PImage flower2Img;
var flower2X = 610;
var flower2Y = 557;
var flower2width = 30;
var flower2height = 30;

//flower2 parameters
PImage flower3Img;
var flower3X = 570;
var flower3Y = 557;
var flower3width = 30;
var flower3height = 30;

//oil parameters
PImage oilImg;
var oilX1 = 650;
var oilX2 = oilX1 + 40;
var oilY1 = 500;
var oilY2 = oilY1 + 20;
var oilwidth = 40;
var oilheight = 20;
var oilmove = 1;
void draw() {
 
 if(!sunIsUp){
        fill(1, 5, 79); // night sky 
        rect(0,0,800,100); 
        fill(255, 255, 255);
        ellipse(80, 20, 15, 15); //stars 
        for(var s = 0; s<30; s++){
            ellipse(random(0,800), random(0,100), 3,2);
        }
     }
    else{
        background(255, 255, 255); //day sky 
        fill(101, 222, 252);
        rect(0,0,800,100);
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
    if(z <= -805){
        z = 800;
    }
    if(z2 <= -605){
        z2 = 600;
    }
    fill(212, 164, 42);
    rect(0,100,800,400);
   
 
    fill(33,33,33);
    rect(0,505,800,50);
    road(530);
    fill(112, 122, 122);
    rect(0, 500, 800, 5);
    

  //draw function

 //draw function



   // ->Senor Cactus avoids obstacles (var senorImg, var senorX1, vvar senorX2, var senorY1, var senorY2):
          //-Jumps over barrels, oil (var barrelImg, var barrelX1, var barrelX2, var barrelY1, var barrelY2 / var oilImg, var oilX1, var oilX2, var oilY1, var oilY2)
          
          // how far senor cactus moves every time

    // Changed speed to 0 from 3

//Jumping



    // If the key is pressed, we want to make senor cactus jump until he reaches the endpoint, if and only
    //  if he is not moving, eg speedY is 0.

    if (keyPressed && (speedY === 0 || senorY1 >350)) { 
        speedY = 5 ;                    
    }                                   

    senorY1 = senorY1 - speedY;
    senorY2 = senorY1 + 125;

     if(senorY1 > 400) {
       speedY = speedY * 0;
    }

    if(senorY1 < 100) {
         speedY = speedY * -1;
    }

          
//Use jumping code to jump on/ over barrels and oils and intersection code to trigger a block when touching the barrels
              


//barrel is moving

if(barrelX1>=0-barrelX2-50){
barrelX1 = barrelX1 - barrelmove;
barrelX2 = barrelX1+50;
}  
else{
    barrelImg = false;
}

if(barrelX1 <= 0 - barrelX2 - 50){
 barrelX1 = 400;
 barrelX2 = barrelX1 + 50;
}

  //if cactus touches the left side of the barrel, the barrel will drag him with it unless if he jumps out of the way
  
//raindrop is moving

if(rainX1>= 0){
    rainX1 = rainX1 - rainmove;
    rainX2 = rainX1 + 50;
    rainY1 = rainY1 + rainmove;
    rainY2 = rainY1 + 60;
}
    else{
     rainImg = false;   
    }

//oil is moving
if(oilX1>= 0 - 40){
    oilX1 = oilX1 - oilmove;
    oilX2 = oilX1 + 40;
}
  
   
   if (doesIntersect(senorX1, senorX2, senorY1, senorY2, barrelX1, barrelX2, barrelY1, barrelY2) === true){
        senorX1 = senorX1 - barrelmove;
        senorX2 = senorX1 + 125;
   }
   else{
       if(senorX1 < 20){
           senorX1 = senorX1 + barrelmove;
           senorX2 = senorX1+125;
       }
   }
   //if the cactus "intersects" the barrel
  //if he gets dragged out of the screen, game ends, and the background stops moving 
   var gameoverbarrel = function(){
       z = 0;
    z2 = 0;
    text("Game Over!!", 145, 185, 200, 100);
    textSize(20);
   };
   
   if(senorX2 < 0){
   gameoverbarrel();
  }
  
  
   if (doesIntersect(senorX1, senorX2, senorY1, senorY2, rainX1, rainX2, rainY1, rainY2) === true){
    rainImg = false;
    println("raindrop!!");
   }
   
   if (doesIntersect(senorX1, senorX2, senorY1, senorY2, oilX1, oilX2, oilY1, oilY2) === true){
    flower1Img = false;
   }
   
   //if cactus "intersects" the raindrop
              
          //-Collects raindrops (var rainImg, var rainX1, var rainX2, var rainY1, var rainY2)
              //Use jumping code and intersection code to trigger the "gain a life" code
      //If touches any of these things, use intersection code, and trigger the "Lose" animation (where image "normal" cactus changes to "dead" cactus while making him fall)
     //If he suceeds, proceed to ending animation. (var progress)
  //Game ends.\
  
image(senorImg, senorX1, senorY1, senorwidth, senorheight);
image(barrelImg, barrelX1, barrelY1, barrelwidth, barrelheight);
image(rainImg, rainX1, rainY1, rainwidth, rainheight);
image(flower1Img, flower1X, flower1Y, flower1width, flower1height);
image(flower2Img, flower2X, flower2Y, flower2width, flower2height);
image(flower3Img, flower3X, flower3Y, flower3width, flower3height);
image(oilImg, oilX1, oilY1, oilwidth, oilheight);




showflower();

};

void setup() {
   size(800, 600);
   background(143, 143, 143);
   senorImg = loadImage("https://s3.amazonaws.com/gwcproj/images/senorcactus.gif", "gif");
   oilImg = loadImage("https://s3.amazonaws.com/gwcproj/images/oil.gif", "gif");
   rainImg = loadImage("https://s3.amazonaws.com/gwcproj/images/water.gif", "gif");
   barrelImg = loadImage("https://s3.amazonaws.com/gwcproj/images/barrel.gif", "gif");
   flower1Img = loadImage("https://s3.amazonaws.com/gwcproj/images/flower.png", "png");
    flower2Img = loadImage("https://s3.amazonaws.com/gwcproj/images/flower.png", "png");
     flower3Img = loadImage("https://s3.amazonaws.com/gwcproj/images/flower.png", "png");
};

