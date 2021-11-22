Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camera");
function click_pic(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML = '<img id="result_pic" src="'+ img +'"/>';
    });
    text_to_speech();
}
model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/OIPY00rr1/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}
function identify() {
    result_img = document.getElementById("result_pic");
    model.classify(result_img, get_emotion);
}
function get_emotion(error, number_array) {
    if (error) {
        console.error(error)
    } else {
        console.log(number_array);
        document.getElementById("number").innerHTML=number_array[0].label;
    }
}

