$(".txtb").on("keyup", function(e) {
    // 13 это кнопка enter
    if (e.keyCode == 13 && $(".txtb").val() != "") {
        var task = $('<li class="task"> </li> ').text($(".txtb").val());
        var del = $('<i class="fas fa-trash-alt"></i>').click(function() {
            var p = $(this).parent();
            p.fadeOut(function() {
                p.remove();
            });
        });
        var check = $('<i class="fas fa-check"></i>').click(function() {
            var p = $(this).parent();
            p.fadeOut(function() {
                $(".comp").append(p);
                p.fadeIn();
            });
            $(this).remove();
        });
        task.append(del, check);
        $(".notcomp").append(task);

        //to clear the input
        $(".txtb").val("");
    }
});

$(document).ready(function() {
    $("#notcomp").sortable({
        axis: "y",
        cursor: "move",
        connectWith: "#comp",
    });
    $("#comp").sortable({
        axis: "y",
        cursor: "move",
        connectWith: "#notcomp",
    });
    $("#comp").sortable(function() {
        $('<i class="fas fa-check"></i>').remove();
    });
});