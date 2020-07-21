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
            buttonText: "Select date",
        })

    .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to")
        .datepicker({
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
            buttonText: "Select date",
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
$(function() {
    var availableTags = [
        "Longboard Waves Bambino '26",
        "Longboard Waves Bamboostick '29",
        "Longboard Waves Soul Surfer '36",
        "Longboard Arbor Pilsner Foundation `29",
        "Longboard Waves Sky Walker '43",
    ];

    $("#tags").autocomplete({
        source: availableTags,
        position: { my: "right top", at: "right bottom" },
    });
});

jQuery(document).ready(function($) {
    $("a").click(function(event) {
        link = $(this).attr("href");
        $.ajax({
            url: link,
        }).done(function(html) {
            $(".main").empty().append(html);
        });
        return false;
    });
});
/*
$(document).ready(function() {
    $('.next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });


    $('.prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});*/
$(document).ready(function() {
    $('.next').click(function() {
        var currentImg = $('.active');
        var currentImgIndex = $('.active').index();
        var nextImgIndex = currentImgIndex + 1;
        var nextImg = $('.img').eq(nextImgIndex);
        currentImg.fadeOut(500);
        currentImg.removeClass('active');

        if (nextImgIndex == ($('.img:last').index() + 1)) {
            $('.img').eq(0).fadeIn(500);
            $('.img').eq(0).addClass('active');
        } else {
            nextImg.fadeIn(500);
            nextImg.addClass('active');
        }

    });

    $('.prev').click(function() {
        var currentImg = $('.active');
        var currentImgIndex = $('.active').index();
        var prevImgIndex = currentImgIndex - 1;
        var prevImg = $('.img').eq(prevImgIndex);
        currentImg.fadeOut(500);
        currentImg.removeClass('active');
        prevImg.fadeIn(500);
        prevImg.addClass('active');
    });

});