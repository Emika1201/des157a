(function () {
    'use strict';

    window.addEventListener('scroll', function () {
        var fixedBlock = document.getElementById('fixedBlock');
        var secondSection = document.getElementById('second');
        var offset = secondSection.offsetTop - window.scrollY;

        if (offset < 0) {
            fixedBlock.classList.add('show');
        } else {
            fixedBlock.classList.remove('show');
        }
    });
   
    
    
    
    
    
    




})();