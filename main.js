cat = 0;
dog = 0;
cow = 0;
lion = 0;
animal = null;
animaal = null;
image = document.getElementById("image");

function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/90qLgxytM/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
} 

function gotResults(error, results) {
    if(error){
        console.error(error);
    }    

    else{
        console.log(results);
        sound = results[0].label;
        accuracy = results[0].confidence;
        red = Math.random()*255;
        green = Math.random()*255;
        blue = Math.random()*255;
        if(sound == "meow"){
            cat = cat + 1;
            animal = cat;
            animaal = "cat";
            image.src = "";
        }
        else if(sound == "bark"){
            dog = dog + 1;
            animal = dog;
            animaal = "dog";
            image.src = "";
        }
        else if(sound == "moo"){
            cow = cow + 1;
            animal = cow;
            animaal = "cow";
            image.src = "";
        }
        else if(sound == "roar"){
            lion = lion + 1;
            animal = lion;
            animaal = "lion";
            image.src = "";
        }
        else{
            animal = "-";
            animaal = "-";
            image.src = "ear.png";
        }
        document.getElementById("audio_number").innerHTML = "audio is played" + animal + "times till now";
        document.getElementById("name_of_sound").innerHTML = "The name of the audio is" + animaal;
        document.getElementById("audio_number").style.backgroundColor = rgb(red, green, blue);
        document.getElementById("name_of_sound").style.backgroundColor = rgb(red, green, blue);
    }
}