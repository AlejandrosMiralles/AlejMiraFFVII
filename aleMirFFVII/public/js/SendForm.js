/** 
 * This program checks if the input "feeback" is filled before submiting the form and if it an legitimate 
 *      feedback, it asks the server to sotre the feedback.
 * Also, it enables the button "resetForm" to erase the content of the form.
 */

$(document).ready( function(){
    function sendFeedbackEvent(){
        parameters = "feedback=" + $("#feedback").val();

        console.log(parameters);
    
        url="/sendFeedback"
    
        $.post(url, parameters, function(){
            $("#resetForm").trigger("click");
        })    
    }

    function checkForm(event){
        event.preventDefault() ;

        feedback = $("#feedback").val();
    
        if (feedback == ""){
            alertMessage = "Please, fill the empty inputs before submiting the form";
            alert(alertMessage);
        } else{
            sendFeedbackEvent();
        }
    }

    function resetForm(event){
        $("#feedbackForm").trigger("trigger");
    }

    $("#resetForm").on("click", resetForm);
    $("#feedbackForm").on("submit", checkForm);
});