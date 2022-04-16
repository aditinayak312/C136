video="";
stat="";

function preload(){
    video=createVideo("cricket.mp4");
}

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    video.hide();
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetect=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML= "STATUS : OBJECT DETECTING";
}
function modelLoaded(){
    console.log("modelLoaded");
    stat=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}