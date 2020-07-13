$(function() {
    $("#dialog").dialog({
        autoOpen: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            Yes: function() {
                $(this).dialog("close");
            },
            No: function() {
                $(this).dialog("close");
            },
        },
    });

    $("#opener").on("click", function() {
        $("#dialog").dialog("open");
    });
});