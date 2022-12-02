/*
    This program checks is the input "feeback" is filled before submiting the form. Also, it enables the button "resetForm" to 
        erase the content of the form
*/

function checkForm(event){
    feedback = document.getElementById("feedback").value ;

    if (feedback == ""){
        event.preventDefault() ;
        alertMessage = "Please, fill the empty inputs before submiting the form";
        alert(alertMessage);
    }
}

function resetForm(event){
    formElement = document.getElementById("feedbackForm");
    formElement.reset();
}

window.onload = function(){
    resetButton = document.getElementById("resetForm");
    formElement = document.getElementById("feedbackForm");

    if (addEventListener){
        resetButton.addEventListener("click", resetForm, true);
        formElement.addEventListener("submit", checkForm, true);
    } else{
        resetButton.attachEvent("onclick", resetForm);
        formElement.attachEvent("onsubmit", checkForm);
    }
}