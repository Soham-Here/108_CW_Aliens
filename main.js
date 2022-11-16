function sound_recognise(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qbkAxAolA/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("Model Loaded! Model Is Ready!");
}

function gotResults(error,results){
if(error){
    console.error(error+" Is the error!");
}
else{
    console.log(results+" Are the results!");

    color_random_r=Math.floor(Math.random()*255)+1;
    color_random_g=Math.floor(Math.random()*255)+1;
    color_random_b=Math.floor(Math.random()*255)+1;

    document.getElementById("sound_h3").innerHTML="The Aliens Can Hear: "+results[0].label;
    document.getElementById("sound_h3").style.color="rgb("+color_random_r+","+color_random_g+","+color_random_b+")";
    document.getElementById("accuracy").innerHTML="Accuracy: "+(results[0].confidence*100).toFixed(4)+"%";
    document.getElementById("accuracy").style.color="rgb("+color_random_r+","+color_random_g+","+color_random_b+")";

    img1=document.getElementById("alien_1");
    img2=document.getElementById("alien_2");
    img3=document.getElementById("alien_3");
    img4=document.getElementById("alien_4");

    if(results[0].label=="Alien 1 (Cough)"){
        img1.src="aliens-01.gif";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png";
        console.log("Alien 1 Is Dancing!");
    }
    else if(results[0].label=="Alien 2 (Singing)"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.gif";
        img3.src="aliens-03.png";
        img4.src="aliens-04.png"; 
        console.log("Alien 2 Is Dancing!");
    }
    else if(results[0].label=="Alien 3 (Clap)"){
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.gif";
        img4.src="aliens-04.png"; 
        console.log("Alien 3 Is Dancing!");
    }
    else{
        img1.src="aliens-01.png";
        img2.src="aliens-02.png";
        img3.src="aliens-03.png";
        img4.src="aliens-04.gif"; 
        console.log("Alien 4 Is Dancing!");
    }
}
}