//Senor Cactus game outline:

  //Game starts:
   // ->Background starts moving (Use moving background code / var backgroundposition, var backgroundwidth)
   // ->Senor Cactus avoids obstacles (var senorImg, var senorX1, vvar senorX2, var senorY1, var senorY2):
          //-Jumps over barrels, oil (var barrelImg, var barrelX1, var barrelX2, var barrelY1, ar barrelY2 / var oilImg, var oilX1, var oilX2, var oilY1, var oilY2)
              //Use jumping code to jump on/ over barrels and oils and intersection code to trigger a block when touching the barrels
          //-Collects raindrops (var rainImg, var rainX1, var rainX2, var rainY1, var rainY2)
              //Use jumping code and intersection code to trigger the "gain a life" code
      //If touches any of these things, use intersection code, and trigger the "Lose" animation (where image "normal" cactus changes to "dead" cactus while making him fall)
     //If he suceeds, proceed to ending animation. (var progress)
  //Game ends.
