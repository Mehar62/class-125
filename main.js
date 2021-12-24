function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function draw(){
    background('#1b1b1b');

    document.getElementById("square_sides").innerHTML = "Width And Height of a Square will be - " + difference + "px";
    fill('#F90093');
    stroke('#F90093')
    square(nose_X, nose_Y, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_X = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("NoseX = " + nose_X + "NoseY = " + nose_Y);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "difference = " + difference);
    }
}

nose_X = 0;
nose_Y = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;



