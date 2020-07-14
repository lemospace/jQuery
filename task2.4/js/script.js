$(function() {
    $(".controlgroup").controlgroup({
        direction: "vertical",
    });
});

$(function() {
    $(".checkboxradio").checkboxradio({
        icon: false,
    });
});

$(function() {
    $(".button").end().eq().button({
        icon: "ui-icon-arrowthick-1-e",
        iconPosition: "end",
    });
});