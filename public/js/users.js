$(document).ready(function () {

    $(document).on("click", ".userInp", function () {

        var nampInput = $('.userInp').val().trim();

        if (!nameInput.val().trim().trim()) {
            return;
        }

        upsertAuthor({
            name: nameInput
        });
    });

    function upsertUser(userName) {
        $.post("/api/users", userName)
    };



//
});