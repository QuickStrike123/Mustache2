function preload() {
    
}

function setup() {

    Canvas = createCanvas(300, 300);

    Canvas.center();

    video = createCapture(VIDEO);

    video.size(300, 300);

    video.hide();

    PoseNet = ml5.poseNet(video, NetLoaded);

    PoseNet.on('pose', PoseLoaded);
    
}

function draw() {

    image(video, 0, 0, 300, 300);
    
}

function TakeSnapshot() {

    save("Picture.png");
    
}

function NetLoaded() {

    console.log('PoseNet Is Initiated');
    
}

function PoseLoaded(Results) {

    if (Results.length > 0) {

        console.log(Results);

        console.log("Nose x = " + Results[0].pose.nose.x);

        console.log("Nose y = " + Results[0].pose.nose.y);
        
    }
    
}