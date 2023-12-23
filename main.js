song1="";
song2="";
leftwristX=0;
leftwristY=0;
rightwristX=0;
rightwristY=0;
scoreleftWrist=0;

function preload(){
    song=loadsound
}

function setup(){
    canvas= CreateCanva(600, 500);
    canvas.center();

    video= createCapture(600, 500);
    video.hide();
    posenet=ml5.poseNet(video, modeloaded);
    posenet.on('pose', gotposes);
}

function draw(){
    image(video,0,0,600,500);

    fill("#FF0000")
    stroke("#00FF00");

    if(leftwristY>0.2){
        circle(leftwristY,leftwristX,20);
        song2.stop;
    }

    if(song1.isPlaying){
        
    }
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristX=results[0].pose.leftWrist.x;
        leftwristY=results[0].pose.leftWrist.y;
        rightwristX=results[0].pose.rightwrist.x;
        rightwristY=results[0].pose.rightwrist.y;
        console.log("leftwristx= "+ leftwristX+ "leftwristy=" + leftwristy+ "rightwristx= " + rightwristX + "rightwristy= " + rightwristY);

        scoreleftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist=" + scoreleftWrist);

        scorerightWrist=results[0].pose.keypoints[9].score;
        console.log("scorerightWrist=" + scorerightWrist);
    }
}