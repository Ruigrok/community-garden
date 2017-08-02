




$(document).ready(function () {


    // Functionality for Materialize dropdown
    $(document).ready(function () {
        $('select').material_select();
    });

    // Functionality for Materialize modal
    $('.modal').modal();

    // Adding clicked vegetable images to new div
    var selections = [];

    $(".veg").on("click", function () {
        var veggie = $(this).attr("data-image");

        if (selections.length < 4) {

            var column = $("<div>");
            column.addClass("col s3");

            var veggieImage = $("<img>");
            veggieImage.attr("src", veggie);
            veggieImage.addClass("image-responsive");

            column.html(veggieImage);
            $("#veggies").append(column);

            selections.push($(this).attr("data-name"));

            if (selections.length === 4) {
                $('#submit').removeClass("disabled");
            }
            console.log(selections);
        }
    });

    // Use "Start Over" button to reset selected vegetables 
    $('#start-over').on("click", function () {
        $('#veggies').empty();
        selections = [];

        if (!$('#submit').hasClass("disabled")) {
            $('#submit').addClass("disabled");
        }
    })

    $('#new-user-modal').on("click", function() {
        $('#modal1').modal('open');
    })

});