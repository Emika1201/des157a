(function () {
    'use strict';
    

    document.addEventListener("DOMContentLoaded", function() {
        var columns = document.querySelectorAll('.column');
    
        columns.forEach(function(column) {   // Add a mouseover event listener to each column
            column.addEventListener('mouseover', function() {
                // Get the image element inside the column
                var image = column.querySelector('img');
    
                // Slide the image to the right
                image.style.transform = 'translateX(800px)'; // As you increase the px it increases the amount the column slides to the right.
            });
    
            // Add a mouseout event listener to help reset the image position. It will go back to the left.
            column.addEventListener('mouseout', function() {
                var image = column.querySelector('img');// helps get the image element inside of the column.
    
                image.style.transform = 'translateX(0)'; // Resets the image position
            });
        });
    });

})();