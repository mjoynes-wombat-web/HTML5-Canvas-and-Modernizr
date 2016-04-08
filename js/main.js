/*
 Name: Simeon Smith
 Date: 4-7-2016
 Class & Section:  WIA-1604
 Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
 HTML5 Shape Drawing Activity
 1.  Setup the canvas and 2d context
 2.  Draw out each shape in the sections below

 ********************************************/

/*******************************************
 FILE SETUP

 // Setup up 7 different Canvases in index.html one for each problem.
 //Link Modernizr.js
 // Link the main.js file
 // Setup the call to that canvas and get it's 2d context
 //Use Modernizr to verify that your browser supports canvas, include a fallback message
********************************************/

if(Modernizr.canvas){                                               //Checks if Canvas is working using Modernizr.
    console.log('Canvas is supported by your browser.');            //Confirms that Canvas is working.
}else{
    console.log('Canvas is not supported by your browser. Please update or try a different browser');                                                        //Alerts that canvas is not working.
}


function getById(name) {                                        //Gets element by id with passed in name.
    return document.getElementById(name);
}

function getCtx(canvas){                                        //Gets contexts of passed in canvas and sets it to 2d.
    return canvas.getContext('2d');
}

function calcRad(deg){                                          //Calculates radians using degress.
    return deg/180*Math.PI;
}

 /*******************************************
 PART 1

 Draw a rectangle starting at point (0 ,0)
 That has a width of 50 px and a heigh of 100px
 Set the color of the rectangle to a shade of blue.
 Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

 Reminder - set the style first then draw.
 ********************************************/

var canvas1 = getById('Canvas1'),                           //Canvas1 Element Variable.
     ctx1 = getCtx(canvas1);                                //Canvas1 Element Context


if (ctx1){                                                  //Confirm that context exists for Canvas1.
    ctx1.fillStyle = 'rgb(40, 70, 150)';                    //Set fill color.
    ctx1.strokeStyle = 'rgb(0, 0, 0)';                      //Set stroke color.
    ctx1.lineWidth = 5;                                     //Set line width for stroke.
    ctx1.fillRect(0, 0, 50, 100);                           //Creates the filled rectangle.
    ctx1.strokeRect(0, 0, 50, 100);                         //Creates the stroke for the rectangle.
}




/*******************************************
 PART 2

 Draw a circle starting at point (50 ,50)
 That has a radius of 20 px
 Set the color of the circle to a shade of red and set the alpha to .5
 Set the stroke color to black and use a radius of 30px for this circle.

 Reminder - set the style first then draw.
 Use the arc method
 ********************************************/


var canvas2 = getById('Canvas2'),                           //Canvas2 Element Variable
    ctx2 = getCtx(canvas2);                                 //Canvas2 Element Context

if (ctx2){                                                  //Confirm that context exists for Canvas2.

    /*I used beginPath and closePath for each arc because when the radius is different for the circles it still creates a stroke around the first circle, even using save and restore, and the creates a line that connects the two strokes at 0 radians.*/

    ctx2.beginPath();                                       //Beginning the path for the filled circle.
    ctx2.fillStyle = 'rgba(175, 0, 40, .5)';                //Set fill color for filled circle.
    ctx2.arc(50, 50, 20, calcRad(0), calcRad(360));         //Create filled circle.
    ctx2.closePath();                                       //Close path of the filled circle.
    ctx2.fill();                                            //Fill the filled circle.


    ctx2.beginPath();                                       //Begin the path for the stroked circle.
    ctx2.strokeStyle = 'black';                             //Set stroke color for stroked circle.
    ctx2.arc(50, 50, 30, calcRad(0), calcRad(360));         //Created stroked circle.
    ctx2.closePath();                                       //Close path for stroked circle.
    ctx2.stroke();                                          //Stroke the circle.
}



/*******************************************
 PART 3

 Practice using Path drawing.
 Create a 5-point star shaped pattern using the lineTo method.
 Begin this shape at (100, 100)

 Height and width and color are up to you.

 ********************************************/


var canvas3 = getById('Canvas3'),                           //Canvas3 Element Variable
    ctx3 = getCtx(canvas3);                                 //Canvas3 Element Context

if(ctx3){                                                  //Confirm that context exists for Canvas3.

    ctx3.strokeStyle = 'rgba(220, 130, 0, .5)';             //Set color for the star's stroke.
    ctx3.lineWidth = 10;                                    //Set the width for the star's stroke.
    ctx3.fillStyle = 'rgba(255, 200, 100, 1)';              //Set the color for the star's fill.

    ctx3.beginPath();                                       //Begin the path of the star.
    ctx3.moveTo(100, 100);                                  //Move pen to starting point for star.

    ctx3.lineTo(120, 50);                                   //Create line to top center point
    ctx3.lineTo(140, 100);                                  //Create line to inner upper right point.
    ctx3.lineTo(190, 100);                                  //Create line to outer upper right point.
    ctx3.lineTo(150, 130);                                  //Create line to inner lower right point.
    ctx3.lineTo(165, 185);                                  //Create line to outer lower right point.
    ctx3.lineTo(120, 150);                                  //Create line to lower center point.
    ctx3.lineTo(75, 185);                                   //Create line to outer lower left point.
    ctx3.lineTo(90, 130);                                   //Create line to inner lower left point.
    ctx3.lineTo(50, 100);                                   //Create line to outer upper left point.
    ctx3.closePath();                                       //Close path to inner upper left point.

    ctx3.fill();                                            //Fill the star.
    ctx3.stroke();                                          //Stroke the star.

}


/*******************************************
 PART 4

 Practice drawing with Bezier curves.
 Try drawing the top to an umbrella.
 This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

 Position, height, width and color are your choice.
 Do not overlap any other object.

 ********************************************/

var canvas4 = getById('Canvas4'),                           //Canvas4 Element Variable
    ctx4 = getCtx(canvas4);                                 //Canvas4 Element Context

if(ctx4) {                                                  //Confirm that context exists for Canvas4.

    ctx4.fillStyle = "rgb(200, 0, 0)";                      //Set color for the umbrella's fill.
    ctx4.lineWidth = 5;                                    //Set the width of the umbrella's stroke.
    ctx4.strokeStyle = 'rgb(70, 30, 30)';                   //Set color for the umbrella's sroke.

    ctx4.beginPath();                                       //Begin path for umbrella.
    ctx4.moveTo(20, 150);                                   //Move to the starting point.
    ctx4.bezierCurveTo(60, 25, 280, 25, 320, 150);          //Create the primary top curve.
    ctx4.bezierCurveTo(300, 135, 240, 140, 220, 160);       //Create the farthest right scallop on the bottom.
    ctx4.bezierCurveTo(200, 140, 140, 140, 120, 160);       //Create the middle scallop on the bottom.
    ctx4.bezierCurveTo(100, 140, 40, 135, 20, 150);         //Create the farthest left scallop on the bottom.
    ctx4.closePath();                                       //Close the path.

    ctx4.fill();                                            //Fill the umbrella.
    ctx4.stroke();                                          //Stroke the umbrella.

}

/*******************************************
 PART 5

 Practice using text.
 Draw text into your canvas.  It can said whatever you would like in any color.

 ********************************************/

var canvas5 = getById('Canvas5'),                           //Canvas5 Element Variable
    ctx5 = getCtx(canvas5);                                 //Canvas5 Element Context

if(ctx5) {                                                  //Confirm that context exists for Canvas5.

    ctx5.fillStyle = 'rgb(30, 70, 150)';

    ctx5.font = 'bold 28px Verdana';
    ctx5.fillText('Creating text with canvas.', 20, 170);

}

/*******************************************
 PART 6

 Pixel manipulation.
 Draw the image logo.png into the canvas in the following 3 ways.
 1. The image exactly as it is.
 2. Shrink the image by 50%
 3. Slice a section of the logo out and draw that onto the canvas.

 Reminder to use the drawImage method for all 3 of the ways.

 ********************************************/

var canvas6 = getById('Canvas6'),                           //Canvas6 Element Variable
    ctx6 = getCtx(canvas6);                                 //Canvas6 Element Context

if(ctx6) {                                                  //Confirm that context exists for Canvas6.

    var logo = getById('logo');

    if(logo){

        console.log(logo);

        ctx6.drawImage(logo, 0, 0);                                 //Draw image at size.

        ctx6.drawImage(logo, 0, 0, logo.width/2, logo.height/2);    //Draw image at half size.

        ctx6.drawImage(logo, 1248, 554, 200, 200, 0, 0, 200, 200);   //Draw a slice of the image.
    }

}


/*******************************************
 PART 7

 Putting it all together.

 Using a combination of all the methods.
 Create a complex scene.
 You must use at least 3 different methods.

 ********************************************/

var canvas7 = getById('Canvas7'),                           //Canvas7 Element Variable
    ctx7 = getCtx(canvas7);                                 //Canvas7 Element Context

if(ctx7) {                                                  //Confirm that context exists for Canvas7.

    var width = ctx7.canvas.width,                          //Find the width of the canvas.
        height = ctx7.canvas.height;                        //Find the height of the canvas.


    ctx7.translate(width/2, height/2);                      //Make the origin point in the center of the canvas.

    ctx7.save();                                            //Save the canvas so we can clear the shadow.

    ctx7.fillStyle = 'rgba(50, 50, 50, .25)';               //Define the circle color.
    ctx7.shadowColor = 'rgba(0, 0, 0, .7)';                 //Define the shadow color.
    ctx7.shadowBlur = 4;                                    //Define the shadow blur.
    ctx7.shadowOffsetX = 3;                                 //Define the shadow x offset for the first circle.
    ctx7.shadowOffsetY = 3;                                 //Define the shadow y offest for the first circle.

    ctx7.beginPath();                                                   //Begin the path for the first top left circle.
    ctx7.arc(-width/2, -height/2, 325, calcRad(0), calcRad(360));     //Create the circle.
    ctx7.fill();                                                        //Fill the circle.


    //Repeat for the second bottom right circle.
    ctx7.shadowOffsetX = -3;
    ctx7.shadowOffsetY = -3;

    ctx7.beginPath();
    ctx7.arc(width/2, height/2, 325, calcRad(0), calcRad(360));
    ctx7.fill();

    //Repeat for the third top right circle.
    ctx7.shadowOffsetX = -3;
    ctx7.shadowOffsetY = 3;

    ctx7.beginPath();
    ctx7.arc(width/2, -height/2, 325, calcRad(0), calcRad(360));
    ctx7.fill();

    //Repeat for the bottom left circle.
    ctx7.shadowOffsetX = 3;
    ctx7.shadowOffsetY = -3;

    ctx7.beginPath();
    ctx7.arc(-width/2, height/2, 325, calcRad(0), calcRad(360));
    ctx7.fill();

    ctx7.restore();                                     //Restore to remove the drop shadow.

    var degrees;                                        //Setup degrees var.

    for(degrees = 0; degrees<360; degrees+=36){         //For ever 36 degrees.

        ctx7.fillStyle = 'rgba(110, 35, 125, .7)';          //Set the fill style for the diamonds.

        ctx7.beginPath();                   //Start creating a diamond.
        ctx7.moveTo(0, 0);                  //Move to the first point.
        ctx7.lineTo(50, 25);                //Move to the second point.
        ctx7.lineTo(100, 0);                //Move to the third point.
        ctx7.lineTo(50, -25);               //Move to the forth point.
        ctx7.closePath();                   //Close the path.
        ctx7.fill();                        //Fill the diamond.
        ctx7.rotate(calcRad(36));           //Rotate 36 degrees.

    }

    for(degrees = 0; degrees<360; degrees+=36){     //Repeat the step but offset by 1/4 of the canvas.

        ctx7.fillStyle = 'rgba(75, 10, 156, .7)';

        ctx7.beginPath();
        console.log(0-width/4);
        ctx7.moveTo(0-width/4, 0-height/4);
        ctx7.lineTo(50-width/4, 25-height/4);
        ctx7.lineTo(100-width/4, 0-height/4);
        ctx7.lineTo(50-width/4, -25-height/4);
        ctx7.closePath();
        ctx7.fill();
        ctx7.rotate(calcRad(36));

    }


}
