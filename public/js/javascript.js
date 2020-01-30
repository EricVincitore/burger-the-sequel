
$(function () {
    console.log("connected")
    $(".devouredBtn").on("click", function (event) {
        // console.log("Devour Button Clicked")
        // var burgerId = $(this).data(dataValues.id);
        // console.log(burgerId)
        // var newdevour = $(this).attr("data-devoured");
        // console.log(newdevour)

        var newDevourState = {
            devoured: true
        };
        console.log(newDevourState)
        // Send the PUT request.
        $.ajax({
            method: "PUT",
            url: "/api/burger/",
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newdevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#addBurger").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        console.log("Add burger button clicked")

        var newBurger = {
            burger_name: $("#burgerName").val().trim(),
            devoured: false
        };
        console.log(newBurger)

        // Send the POST request.
        $.ajax({
            method: "POST",
            url: "/api/burger",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});