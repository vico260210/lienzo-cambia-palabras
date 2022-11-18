noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;

function setup(){
    canvas=createCanvas(550,550);
    canvas.position(600,150);
    video=createCapture(VIDEO);
    video.size(500,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    background("blue");
    document.getElementById("text_size").innerHTML="size of text will be="+difference+"px";
    text("hola",noseX,noseY);
    textSize(difference);
    fill("white");
}

function modelLoaded(){
    console.log("poseNet is initialized",noseX,noseY);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results)
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log(leftWristX,rightWristX);
    }
}