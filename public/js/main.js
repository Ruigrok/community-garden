
// Adding clicked vegetable images to new div
var selections = [];

$(document).ready(function () {

    // Functionality for Materialize select dropdown
    $('select').material_select();

    // Functionality for Materialize modal
    $('.modal').modal();

    $(".veg").on("click", function () {
        var user = $('#select-user').val();

        var veggie = $(this).attr("data-image");

        if (selections.length < 4) {
            console.log(user);
            var column = $("<div>");
            column.addClass("col s3");

            var veggieImage = $("<img>");
            veggieImage.attr("src", veggie);
            veggieImage.addClass("image-responsive");

            column.html(veggieImage);
            $("#veggies").append(column);

            selections.push($(this).attr("data-name"));

            if (selections.length === 4 & user !== null) {
                $('#submit').removeClass("disabled");
            }
        }
    });

    $('#select-user').on("change", function () {
        var user = $('#select-user').val();
        if (selections.length === 4 & user != null) {
            $('#submit').removeClass("disabled");

        }
    })

    // Use "Start Over" button to reset selected vegetables 
    $('#start-over').on("click", function () {
        $('#veggies').empty();
        selections = [];

        if (!$('#submit').hasClass("disabled")) {
            $('#submit').addClass("disabled");
        }
    })

    $('#new-user-modal').on("click", function () {
        //$('.userInp').val("");
        //$('#reset-input').removeClass("active");
        $('#modal1').modal('open');
    });

    $('#submit').on("click", function () {
        console.log($("#select-user").val());
    })


});