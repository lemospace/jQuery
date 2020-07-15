$(function() {
    $("#datepicker").datepicker();
});
$(function() {
    var availableTags = ["Kharkiv", "Kyiv", "Odessa", "Lviv"];
    $("#airport").autocomplete({
        source: availableTags,
    });
});
$(function() {
    $(".controlgroup").controlgroup({
        direction: "vertical",
    });
});

$(function() {
    $(".checkboxradio input").checkboxradio({
        icon: false,
    });
});

$(function() {
    $(".button button").button({
        icon: "ui-icon-arrowthick-1-e",
        iconPosition: "end",
    });
});