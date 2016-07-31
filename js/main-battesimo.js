$(document).ready(init);

function new_participant(){

    var name = $('form li.name input').val();
    var email = $('form li.email input').val();
    var guests = $('form li.guests input').val();

    alert(name + email + guests);
}


function init() {

    console.log("here");
    $('#record-new-participant').click(new_participant);
}


