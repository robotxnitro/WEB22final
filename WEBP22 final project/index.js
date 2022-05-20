
//creates drawing canvas
var canvas=document.querySelector(".drawingBoard");
var ctx = canvas.getContext("2d");

// creates color option
var colorIcon=document.getElementsByClassName("colorIcon")[0];
//create slider changer
var size=document.querySelector(".size");

var range=document.querySelector(".range");
//creates erase icon
var erase=document.querySelector(".erase");
//create clear button to create a new canvas
var clear=document.querySelector(".clear");
//create download i can to save canvas
var save=document.querySelector(".save");

var save=document.querySelector(".save");
//starts anew canvas 
ctx.fillStyle="gray";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//download cavas as image 
save.addEventListener("click", function() {
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download = "image";
    a.click();
  });

  //create new canvas 
clear.addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="gray";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});

//suppose poseble creates a daw animations ahta appers to erase 
erase.addEventListener("click", event=>{
    ctx.strokeStyle ="gray";
})
//contrls the slder and applies to stroke 
size.addEventListener("input", event=>{
    var num=event.target.value;
    range.innerHTML=num;
    ctx.lineWidth=num;
})

// have each clor slected to be use when drwaing 
colorIcon.addEventListener("click", function(event) {
    ctx.strokeStyle = event.target.value;
});
var x = 0, y = 0;
var isMouseDown = false;

//starts of webpage with black color stroke
ctx.strokeStyle ="black";


// creates drawing fucntion depending on the mouse postion 
canvas.addEventListener("mousedown",function(event) {
    setMouseCoordinates(event);
    isMouseDown = true;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
});
canvas.addEventListener("mouseup", function(event) {
    setMouseCoordinates(event);
    isMouseDown = false;
});
canvas.addEventListener("mousemove", function(event) {
    setMouseCoordinates(event);

    if(isMouseDown){
      ctx.lineTo(x, y);
      ctx.stroke();
    }
});
