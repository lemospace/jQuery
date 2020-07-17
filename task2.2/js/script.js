$(function() {
    var dateFormat = "mm/dd/yy",
        from = $("#from")
        .datepicker({
            showAnim: "slide",
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            showOn: "both",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
        })

    .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to").datepicker({
            showAnim: "clip",
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 3,
            showButtonPanel: true,
            changeMonth: true,
            changeYear: true,
            showOn: "both",
            buttonImage: "images/calendar.gif",
            buttonImageOnly: true,
            buttonText: "Select date"
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});