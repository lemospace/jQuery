$(function() {
    $("#name-error").hide();
    $("#email-error").hide();
    $("#comm-error").hide();

    var error_name = false;
    var error_email = false;
    var error_comm = false;

    $("#name").focusout(function() {
        check_name();
    });
    $("#email").focusout(function() {
        check_email();
    });
    $("#comm").focusout(function() {
        check_comm();
    });

    function check_name() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#name").val();
        if (pattern.test(name) && name !== "") {
            $("#name-error").hide();
            $("#name").css("border-bottom", "2px solid #34F458");
        } else {
            $("#name-error")
                .html("Should contain only characters")
                .css("color", "#F90A0A");
            $("#name-error").show();
            $("#name").css("border-bottom", "2px solid #F90A0A");
            error_name = true;
        }
    }

    function check_email() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== "") {
            $("#email-error").hide();
            $("#email").css("border-bottom", "2px solid #34F458");
        } else {
            $("#email-error").html("Invalid email address").css("color", "#F90A0A");
            $("#email-error").show();
            $("#email").css("border-bottom", "2px solid #F90A0A");
            error_email = true;
        }
    }

    function check_comm() {
        var comm_length = $("#comm").val().length;

        if (comm_length < 20) {
            $("#comm-error").html("At least 20 characters").css("color", "#F90A0A");
            $("#comm-error").show();
            $("#comm").css("border-bottom", "2px solid #F90A0A");
            error_comm = true;
        } else {
            $("#comm-error").hide();
            $("#comm").css("border-bottom", "2px solid #34F458");
        }
    }

    $("#form").submit(function() {
        error_name = false;
        error_email = false;
        error_comm = false;

        check_name();
        check_email();
        check_comm();

        if (error_name === false && error_email === false && error_comm === false) {
            $.post("data.php", {});
            alert("Your feedback has been successfully sent!");

            return true;
        } else {
            alert("Please fill the form correctly");
            return false;
        }
    });
});
/*
$(document).ready(function() {
    $("#name").keyup(function() {
        var pattern = /^[a-zA-Z]*$/;
        var name = $("#name").val();
        if (pattern.test(name) && name !== "") {
            $.post("data.php", {
                data: name,
            });
        }
    });
    $("#email").keyup(function() {
        var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var email = $("#email").val();
        if (pattern.test(email) && email !== "") {
            $.post("data.php", {
                data: email,
            });
        }
    });
    $("#comm").keyup(function() {
        var comm = $("#comm").val();
        var comm_length = $("#comm").val().length;
        if (comm_length > 20) {
            $.post("data.php", {
                data: comm,
            });
        }
    });
});*/