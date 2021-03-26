canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var Car_width = 100;
var Car_height = 90;
var Car_x = 10;
var Car_y = 10;
var Car_y_2 = 20;
var background_image = "images(1).png";
var Car_image_1 = "Car-1.png";
var Car_image_2  = "images.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car_1_imgTag = new Image();
    Car_1_imgTag.onload = uploadCar;
    Car_1_imgTag.src = Car_image_1;

    Car_2_imgTag = new Image();
    Car_2_imgTag.onload = uploadCar2;
    Car_2_imgTag.src = Car_image_2;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar(){
    ctx.drawImage(Car_1_imgTag,Car_x,Car_y,Car_width,Car_height);
}
function uploadCar2(){
    
ctx.drawImage(Car_2_imgTag,Car_x,Car_y,Car_width,Car_height);

    
}
window.addEventListener("keydown",my_keydown);

