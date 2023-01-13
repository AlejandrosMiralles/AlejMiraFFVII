/**
 * 
 */

$(document).ready(function(){
    function removeFeedback(event){
        //Input's ID is always "removeX", where X is the ID.
        id = event.target.id.slice(6);

        $.post("/admin/deleteFeedback", `id=${ id }`, function(){
            $(`#feedback${ id }`).css("display", "none");
        });
    }

    $(".removeFeedback").on("click", removeFeedback);
});