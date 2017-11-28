
function readText(){
    let textArea = document.getElementById("textToSpeach");
    console.log(textArea);
    var msg = new SpeechSynthesisUtterance(textArea.value);
    window.speechSynthesis.speak(msg);
}