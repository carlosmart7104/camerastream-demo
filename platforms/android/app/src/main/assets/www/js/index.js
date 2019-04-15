var preview = document.getElementById('preview');

function main() {
    console.log('onDeviceReady');
    CameraStream.start(function (base64img) {
        preview.src = base64img;
    });
}

document.addEventListener('deviceready', main);
// main();
