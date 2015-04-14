

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
 


