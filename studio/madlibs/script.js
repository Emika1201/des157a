(function () {

    'use strict';

    console.log('reading js');

    const sunPicture = document.getElementById("sunPicture");
    function floatSunPicture(){
        sunPicture.style.animation = "float 3s ease infinite"
    }
    floatSunPicture();
    
    const form = document.getElementById("myForm");
    const overlay = document.getElementById("overlay");
    const storyContent = document.getElementById("storyContent");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const noun1 = document.getElementById("noun1").value;
        const adj1 = document.getElementById("adj1").value;
        const adj2 = document.getElementById("adj2").value;
        const verb1 = document.getElementById("verb1").value;
        const noun2 = document.getElementById("noun2").value;
        const verb2 = document.getElementById("verb2").value;
        const adj3 = document.getElementById("adj3").value;
        const story = `Once upon there was a  ${noun1} who lived in the house. She loved the ${adj1} trees. She always imagined living
        in a fantasy forest. She enjoyed the ${adj2} smell of the air. She always ${verb1} her ${noun2} through the forest. She also
        enjoyed ${verb2} the sunset. Her life was always ${adj3} in the fantasy forest.`;

        storyContent.textContent =story;


    });

    document.querySelector('.close').addEventListener('click', function (event){
        event.preventDefault();
        document.getElementById('overlay').className = 'hidden';
    });

    })();
    
  

    
    
