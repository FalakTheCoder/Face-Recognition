Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality:90
    });

    camera = document.getElementById("camera");
    Webcam.attach('#camera');

    function take_selfie()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/7t7Twqer4/model.json',modelLoaded);
