canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define the width & height of the rover image.
roverwidth=100
roverheight=90


background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add() {
     

	background_imgTag = new Image();                                    //defining a variable with a new image
	 background_imgTag.onload = uploadBackground;
     background_imgTag.src = background_image;                                    // setting a function, onloading this variable// load image
      
    

     rover_imgTag = new Image();                                    //defining a variable with a new image
	  rover_imgTag.onload = uploadRover;                                   // setting a function, onloading this variable
      rover_imgTag.src = rover_image;                                        //Draw image of background
      // load image
 }
//Create "uploadBackground()" function.
                              
   function uploadBackground() {
       ctx.drawImage(background_imgTag, 0,0, canvas.width,canvas.height);
   }                                    //Draw image of background

//Create "uploadrover()" function.

     function uploadRover() {
         ctx.drawImage(rover_imgTag,rover_x,rover_y,roverwidth,roverheight);
     }                                  //Draw image of rover


window.addEventListener("keydown", my_keydown);                           
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
		if (keyPressed =='38'){
            up();
            console.log("up");
        }
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
		if(keyPressed == '40'){
            down();
         console.log("down");
        }




    //Additional Activity
    //Write the code for left and right arrow pressed. 
    if(keyPressed == '39'){
        right();
     console.log("right");
    }

    if(keyPressed == '37'){
        left();
     console.log("left");
    }
}

function up(){

}
function down(){
	
}
function right(){
	
}
function left(){
	
}



