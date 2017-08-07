var selections;

console.log(selections);
// submit order when "submit" button is clicked
$('#submit').on("click", function () {
    addOrder();
})

// submit order when enter key is pressed
$(document).keypress(function (e) {
    if (e.which == 13) {
        if (!$('#submit').hasClass("disabled")) {
            addOrder();
        }
    }
});

function addOrder() {

    var user = $('#select-user').val();

    var newOrder = {
        veggies: selections,
        UserId: user,
    };

    $.post("/api/orders", newOrder, function (data) {
        console.log(data);

        $('#veggies').empty();
        selections = [];

        if (!$('#submit').hasClass("disabled")) {
            $('#submit').addClass("disabled");
        };

        $('#modal2').modal('open');
    });

}

