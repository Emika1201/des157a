(function () {

    'use strict';

    console.log('reading js');

    const sunPicture = document.getElementById("sunPicture");
    function floatSunPicture(){
        sunPicture.style.animation = "float 3s ease infinite"
    }
    floatSunPicture();
})();