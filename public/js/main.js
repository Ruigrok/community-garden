$(document).ready(function () {

    // Handlebars Helper for formatting veggies into rows and columns

    Handlebars.registerHelper('grouped_each', function (every, context, options) {
        var out = "", subcontext = [], i;
        if (context && context.length > 0) {
            for (i = 0; i < context.length; i++) {
                if (i > 0 && i % every === 0) {
                    out += options.fn(subcontext);
                    subcontext = [];
                }
                subcontext.push(context[i]);
            }
            out += options.fn(subcontext);
        }
        return out;
    });


    $(document).ready(function () {
        $('select').material_select();
    });

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

    $("#start-over").on("click", function () {


    })

    //
});