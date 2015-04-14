
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
    }
    if(z2 >= 400){
        z2 = -405;
    }
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
    }
    
    
  //draw function
