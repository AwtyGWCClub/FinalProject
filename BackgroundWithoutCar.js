

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
    z = z+2;
    z2 = z2+2;
    if(z >= 400){
        z = -405;
    }
    if(z2 >= 400){
        z2 = -405;
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

