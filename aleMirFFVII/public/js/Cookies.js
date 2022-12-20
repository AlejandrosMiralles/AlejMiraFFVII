/* 
    This web site has 2 styles. This program store a cookie to know which css has to run on php
*/

const cookieName = "morningMode";
const morningModeLinkID = "Boton_modo_dia";

function setNewModeCookie(event){
    event.preventDefault();
    document.cookie = cookieName + "=" + (event.target.parentNode.className == morningModeLinkID );
    location.reload();
}


$(document).ready(function(){
    $('p[name=Boton_cambio_dia] a').on("click", setNewModeCookie);
});