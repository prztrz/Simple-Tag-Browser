
document.addEventListener("DOMContentLoaded", function() {
    //get elements
    var images = document.getElementById("gallery").children;
    var showBtn = document.getElementById("showButton");
    var hideBtn = document.getElementById("hideButton");
    var input = document.getElementById("tagInput");

    //add click event to show button
    showBtn.addEventListener("click", function() {
        var inputData = input.value;
        //if tag inserted by user is within data-tag attribute of image, remove class .invisible from it
        for (var i = 0; i < images.length; i++) {
            var currentTag = images[i].dataset.tag
            if (currentTag.indexOf(inputData) > -1){
                images[i].classList.remove('invisible');
            }
        }
    });

    //add click event to hide button
    hideBtn.addEventListener("click", function() {
        var inputData = input.value;
        //if tag inserted by user is within data-tag attribute of image, add class .invisible from it
        for (var i = 0; i < images.length; i++) {
            var currentTag = images[i].dataset.tag
            if (currentTag.indexOf(inputData) > -1){
                images[i].classList.add('invisible');
            }
        }
    });
});
