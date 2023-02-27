x=0;
y=0;
function preload(){
oculos=loadImage("https://i.postimg.cc/XJmxhz4B/oculos.png");
}
function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    image(video,0,0,400,400);
    image(oculos,x,y,150,80);
}
function tirarfoto() {
 save("minhafoto.png")   
}
function modelLoaded() {
    console.log("poseNet iniciado");
}
function gotPoses(results) {
    x=(results[0].pose.nose.x)-78;
    y=(results[0].pose.nose.y)-65;
    console.log(results);
}