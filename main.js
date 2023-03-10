https://teachablemachine.withgoogle.com/models/9Gy1pn-Jj/
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>"'

    });
}
console.log('ml5 version:',ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/9Gy1pn-Jj/model.json", modelLoaded);
function modelLoaded(){
    console.log('Model Loaded');

}
function check(){
    img =  document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("name").innerHTML = result[0].label
        if (result[0].label =="Like"){
            document.getElementById("emoji").innerHTML = "&#9757;";
        }
        if (result[0].label =="Dislike"){
            document.getElementById("emoji").innerHTML = "&#9994;";
        }
        if (result[0].label =="Peace"){
            document.getElementById("emoji").innerHTML = "&#9995;";
        }
    }
}