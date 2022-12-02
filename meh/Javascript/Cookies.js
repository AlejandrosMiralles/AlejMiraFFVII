/* 
    This web site has 2 styles. This program store a cookie to know which css has to run on php
*/

const cookieName = "morningMode";
const morningModeLinkID = "Boton_modo_dia";

function setNewModeCookie(event){
   document.cookie = cookieName + "=" + (event.target.parentNode.className == morningModeLinkID );
}


window.onload = function(){
    modeLink = document.getElementById("Boton_cambio_dia");

    if(addEventListener){
        modeLink.addEventListener("click", setNewModeCookie, true);
    } else {
        modeLink.attachEvent("onclick", setNewModeCookie);
    }

}