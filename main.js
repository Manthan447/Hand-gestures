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
function Predict_it() {
    Img = document.getElementById("taken_img")
    classifier.classify(Img, gotresults)
}

function gotresults(error, results) {
    if (error) {
        console.error()
    }
    else {
        console.log(results)
        prediction1 = results[0].label
        prediction2 = results[1].label
        document.getElementById("gesture1").innerHTML = prediction1
        document.getElementById("Gesture2").innerHTML = prediction2
        if (prediction1 == "Yo") {
            document.getElementById("Gesture1").innerHTML = "&#129304;"
        }
        else if (prediction1 == "Victory") {
            document.getElementById("Gesture1").innerHTML = "&#9996;"
        } 
        else if (prediction1 == "Thumbs Up") {
            document.getElementById("Gesture1").innerHTML = "&#128077;"
        }
        if (prediction2 == "Yo") {
            document.getElementById("gesture2").innerHTML = "&#129304;"
        }
        else if (prediction2 == "Victory") {
            document.getElementById("gesture2").innerHTML = "&#9996;"
        } 
        else if (prediction2 == "Thumbs Up") {
            document.getElementById("gesture2").innerHTML = "&#128077;"
        }
    }

}