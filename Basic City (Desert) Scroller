
noStroke();//no outline
var mountain = function(x1, x2, x3){
    fill(199, 167, 40);
    triangle(x1, 100, x2, 100, x3, 18);
}; //mountain depends on position

    
var bcar = function(x, y, r, g, b){ // cactus goes here 
    fill(r,g,b);
    rect(x, y, 60, 27);
    rect(x+15, y-15, 30, 15);
    fill(0, 0, 0);
    ellipse(x+15, y+30, 15,15);
    ellipse(x+45, y+30, 15, 15);
}; //big car depends on color
var oil = function(x, y, r, g, b){ // oil or tar 
    fill(r,g,b);
    rect(x, y, 20, 9);
    rect(x+5, y-5, 10, 5);
    fill(0, 0, 0);
    ellipse(x+3, y+10, 5, 5);
    ellipse(x+15, y+10, 5, 5);
}; //small car
var road = function(y){
    fill(173, 133, 59);
    rect(0, y, 400, 2);
}; //draw a grey road

var x =0;
var xb = -360;

var y = 0;
var yb = -360;


    
var z = 0; // closeness of mountains 
var x1 = [5, 205]; // left side of mtn 
var x2 = [200, 400]; // right side of mtn 
var x3 = [100, 300]; // top of mtn 
//parameters of mountains
var z2 = -405; // closeness of mtns 
var c = -30;//closer cars
var b = -30;//farthest cars
var roy0 = 0;
var gee0 = 255;
var biv0 = 255;//farthest car colors
var roy1 = 0;
var gee1 = 255;
var biv1 = 255;//farther car colors
var roy2 = 0;
var gee2 = 255;
var biv2 = 255;//closest car colors
//car colors
var d = 430;//farther cars
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
   
    x = x+3;
    xb = xb+3;
    //jump 5 steps
    if(x >= 425){
        x = -340;
    }//once we hit the end, we cycle to the beginning
    if(xb >=425){
        xb = -340;
    }
   

   

 
    if(b >= 500){
        roy0 = random(0,255);
        gee0 = random(0,255);
        biv0 = random(0,255);
        b = -30;
    }
 
    if(d <= -500){
        roy1 = random(0,255);
        roy1 = random(0,255);
        biv1 = random(0,255);
        d = 430;
    }

    
    y = y+6;
    yb = yb+6;
    
    if(y >= 445){
        y = -350;
    }
    if(yb >= 445){
        yb = -350;
    }
    fill(33,33,33);
    rect(0,305,400,50);
    road(330);
    fill(112, 122, 122);
    rect(0, 300, 400, 5);
  
    bcar(50, 315, 255, 0,0); // position of car 
    
    if(c >= 500){
        roy2 = random(0,255);
        gee2 = random(0,255);
        biv2 = random(0,255);
        c = random(-1200,-400);
    }
    count = count +1;
    if(count >= 900){
        sunIsUp = !sunIsUp;
        count = 0;
    }
    
    

}; //draw function
