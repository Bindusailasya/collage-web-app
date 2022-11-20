var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
setTimeout();

}

function take_snapshot()
{
    console.log(img_id);
    webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
        }

        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
        }

        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie" src="'+data_uri+'"/>'
        }
    }
    )};

function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").scr;
    link.href = image;
    link.click();
}

setTimeout(function()
{
    img_is ="selfie1";
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);