var prediction1 = ""
var prediction2 = ""

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
})

Webcam.attach("#current_img")

function captured(){
    Webcam.snap(function (data_uri){
        document.getElementById("captured_img").innerHTML = "<img id='taken_img' src='"+data_uri+"'>"
    })
}

console.log("ml5 version" + ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_ixzfW9lh/model.json" , ModelLoaded)

function ModelLoaded(){
    console.log("Model Loaded")
}

function speak(){
    var synth = window.speechSynthesis
    var speak_data_1 = "The first prediction is" + prediction1
    var speak_data_2 = "The second prediction is" + prediction2
    var utter = SpeechSynthesisUtterance(speak_data_1  , speak_data_2)
    synth.speak(utter)
}