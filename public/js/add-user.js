
// add user when "add" button is clicked
$(document).on("click", "#add-user", function () {
    addUser();
});

// add user when enter key is pressed
$('.userInp').keypress(function (e) {
    if (e.which == 13) {
        
        addUser();
        $('#modal1').modal('close');
        
        
    }
});

function addUser() {
    var nameInput = $('.userInp').val().trim();
    console.log(nameInput);

    var newUser = {
        name: nameInput
    };

    $.post("/api/users", newUser, function (data) {
        console.log(data);

        var newOption = $("<option>");
        newOption.attr("value", data.id);
        newOption.text(data.name);
        newOption.addClass("selected");

        $('#select-user').prepend(newOption);
        $('#default-select').remove();

        $('select').material_select();
    });
}
