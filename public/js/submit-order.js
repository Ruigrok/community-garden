var selections;

console.log(selections);
// submit order when "submit" button is clicked
$(document).on("click", "#submit", function () {
    addOrder();
});

// submit order when enter key is pressed
$('.userInp').keypress(function (e) {
    if (e.which == 13) {
        if (!$('#submit').hasClass("disabled")) {
            addOrder();
        }
    }
});

function addOrder() {

   // var user = $('#select-user').val();

   // if (user != "") {
            var newOrder = {
        veggies: selections,
        UserId: user
    };

    $.post("/api/orders", newOrder, function (data) {
        console.log(data);

    });
   // }
}

