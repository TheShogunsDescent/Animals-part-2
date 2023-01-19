function animal() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifer=ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/O8hAuNnJg/.json', modelReady )
}
function modelReady() {
     classifer.classify(gotresult)
}
function gotresult(error, result ) {
console.log;{result}
}