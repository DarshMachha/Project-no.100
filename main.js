var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML = "" ;
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log();
    document.getElementById("textbox").innerHTML=Content;
}

setTimeout(function(){
    img_id = "selfie1";
    take_snapshot();
    speak_data = "taking your next selfie in 10 seconds ";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    SpeechSynthesis.speak(utterThis);
},10000);

Webcam.set({
    width:360,
    height:250,
image_format:'png' ,
png_quality:90
});

camera = document.getElementById("camera");

function take_snapshot(){
    console.log(img_id);
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_url+'"/>';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_url+'"/>';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_url+'"/>';
        }
    })
}