/**
 * This programs adds an event on the first img of the html. With a correct structure, it duplicates the img and makes it bigger.
 */

function getDimension(element, dimensionName){
    dimension = document.defaultView.getComputedStyle(element, '').getPropertyValue(dimensionName);
    dimension = dimension.split(/\D/)[0];
    dimension = parseInt(dimension);

    return dimension;
}

function setWindowDimensions(element, idolElement){

    var elementsHeight = getDimension(idolElement, 'height');
    width =  getDimension(idolElement, 'width');


    const ratio = elementsHeight/width; 
    const height = 37;

    element.style.width = height/ratio + "em";
    element.style.height =  height + "em";
}

function expandImg(event){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

    setWindowDimensions(modalImg, this);

    span.style.width = "10em";
    span.style.height = "10em";
}

function removeBigImg(event){
    modal.style.display = "none";
}


window.onload = function(){
    // Get the modal
    modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    img = document.getElementsByTagName("img")[0];
    modalImg = document.getElementById("img01");
    captionText = document.getElementById("caption");
    // Get the <span> element that closes the modal
    span = document.getElementsByClassName("close")[0];
    
    if (addEventListener){
        //When the users click on <img>, expands the Img
        img.addEventListener("click", expandImg, true);
        // When the user clicks on <span> (x), close the modal
        span.addEventListener("click", removeBigImg, true);
    }
}