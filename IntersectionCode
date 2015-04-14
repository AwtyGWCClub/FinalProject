background(165, 215, 232);
stroke(0, 0, 0);
noFill();
var cactus = getImage("avatars/leafers-seedling");
var ground = getImage("cute/BrownBlock");
var oil = getImage("cute/WaterBlock");

//These are the parameters of the rectangle image "cactus"
var cactusX1 = 260;
var cactusY1 = 275;
var cactusX2 = cactusX1 + 80;
var cactusY2 = cactusY1 + 80;
//These are the parameters of the rectangle image "oil"
var oilX1 = 260;
var oilY1 = 350;
var oilX2 = oilX1 + 40;
var oilY2 = oilY1 + 20;
//Variables representing the actual images of the objects
var c = image(cactus, cactusX1, cactusY1, 80, 80);
var g = image(ground, 0, 335, 400, 72);
var o = image(oil, oilX1, oilY1, 40, 20);
rect(260, 350, 40, 20);
rect(20, 275, 80, 80);

    //intersection function: if the X and Y coordinates of the cactus image intersect the X and Y coordinates of the oil image, then this fucntion is true, if not, this function is false

    var intersectRect = function(rctX1, rctX2, rctY1, rctY2, rct2X1, rct2X2, rct2Y1, rct2Y2){
        var doesIntersect = false;
        println("R1Xcoordinates " + rctX1 + " " + rctX2);
        println("R1Ycoordinates " + rctY1 + " " + rctY2);
        println("R2Xcoordinates " + rct2X1 + " " + rct2X2);
        println("R2Ycoordinates " + rct2Y1 + " " + rct2Y2);
        
        if((rctX1 <= rct2X1 && rct2X1 <= rctX2) && (rctY1 <= rct2Y1 && rct2Y1 <= rctY2)){
            println("T1");
            doesIntersect = true;
        }
        else{
            doesIntersect = false;
        }
     return doesIntersect;
   };
 
 //if statements saying that if the coordinates of the images intersect, write "true", if not, write "false"  
if(intersectRect(cactusX1, cactusX2, cactusY1, cactusY2, oilX1, oilX2, oilY1, oilY2)=== true){
    println("You lose!!!");
}

else{
    println("False");
}
