    $(document).ready(function () {

   $('.modal').modal();

        var selections = [];

        $(".veg").on("click", function () {
            var veggie = $(this).attr("data-image");

            if (selections.length < 3) {

                var column = $("<div>");
                column.addClass("col s3");

                var veggieImage = $("<img>");
                veggieImage.attr("src", veggie);
                veggieImage.addClass("image-responsive");

                column.html(veggieImage);
                $("#veggies").append(column);
            }

            if (selections.length === 4) {
                var column = $("<div>");
                column.addClass("col s3");

                var veggieImage = $("<img>");
                veggieImage.attr("src", veggie);
                veggieImage.addClass("image-responsive");

                column.html(veggieImage);
                $("#veggies").append(column);
            }
        });

        $("#start-over").on("click", function() {

        
        })

//
    });