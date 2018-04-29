const ia = document.querySelector('#audio');
const iv = document.querySelector('#video');
const pv = document.querySelector('video');
const player = document.querySelector('audio');
const reproduzir = document.querySelector('#reproduzir');
const gravarAudio = document.querySelector('#gravar');
ia.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', function(e) {
        player.src = reader.result;
    });
    reader.readAsDataURL(ia.files[0]);
});
iv.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', function(e) {
        pv.src = reader.result;
        // serve para deixar o vídeo visível depois de escolher;
        pv.hidden = false;
    });
    reader.readAsDataURL(iv.files[0]);
});
reproduzir.addEventListener('click', function() {
    pv.play();
    player.play();
    // while (pv.ended === false) {
    // if(pv.ended === true){
    // player.pause()
    // }
    // }
});
pause.addEventListener('click', function(){
    pv.pause();
    player.pause();
});
pv.addEventListener('ended', function() {
    player.pause();
    // resetar música e vídeo;
    player.currentTime = 0;
    pv.currentTime = 0;
});
gravarAudio.addEventListener('click', function() {
    const gravar = document.querySelector('#player');
    const gravando = function(stream) {
        // cria URL para hospeadar a voz do microfone e colocar no src da tag audio;
        if (window.URL) {
            gravar.src = window.URL.createObjectURL(stream);
        } else {
            gravar.src = stream;
        }
    };
    navigator.mediaDevices.getUserMedia({audio: true, video: false})
        .then(gravando);
});
//não so depois disso dar play na tag audio pq o som vai ta no src dela?




/*
function getUserMedia(options, successCallback, failureCallback) {
var api = navigator.getUserMedia || navigator.webkitGetUserMedia ||
navigator.mozGetUserMedia || navigator.msGetUserMedia;
if (api) {
return api.bind(navigator)(options, successCallback, failureCallback);
}
}

function getStream(type) {
if (!navigator.getUserMedia && !navigator.webkitGetUserMedia &&
!navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
alert('User Media API not supported.');
return;
}

var constraints = {};
constraints[type] = true;
getUserMedia(constraints, function (stream) {
var mediaControl = document.querySelector(type);

if ('srcObject' in mediaControl) {
mediaControl.srcObject = stream;
mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
} else if (navigator.mozGetUserMedia) {
mediaControl.mozSrcObject = stream;
}
}, function (err) {
alert('Error: ' + err);
});
}
*/

