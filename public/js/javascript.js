
$(function () {
    console.log("connected")
    $(".devouredBtn").on("click", function (event) {
        var id = $(this).data("id");
        console.log(id)
        var newDevour = $(this).attr("data-devour");
        console.log(newDevour)

        var newDevourState = {
            devoured: newDevour
        };
        console.log(newDevourState)
        // Send the PUT request.
        $.ajax({
            method: "PUT",
            url: "/api/burger/:" + id,
            data: newDevourState
        }).then(
            function () {
                console.log("changed devour to", newDevour);
                // Reload the page to get the updated list
                //location.reload();
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