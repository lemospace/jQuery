$(".txtb").on("keyup", function(e) {
    // 13 это кнопка enter
    if (e.keyCode == 13 && $(".txtb").val() != "") {
        var task = $('<li class="task" id="task"> </li> ').text($(".txtb").val());
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

$(function() {
    // There's the gallery and the trash
    var $notcomp = $("#notcomp");
    var $comp = $("#comp");
    var task = $('<li class="task" id="task"> </li> ');

    // Let the gallery items be draggable
    task.draggable({
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        cursor: "move",
    });

    // Let the trash be droppable, accepting the gallery items
    $comp.droppable({
        accept: "#notcomp > task",
    });
});