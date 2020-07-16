$(function() {

    // There's the gallery and the trash
    var $gallery = $("#gallery"),
        $trash = $("#trash");

    // Let the gallery items be draggable
    $("li", $gallery).draggable({
        cancel: "a.ui-icon", // clicking an icon won't initiate dragging
        revert: "invalid", // when not dropped, the item will revert back to its initial position
        containment: "document",
        helper: "clone",
        cursor: "move"
    });

    // Let the trash be droppable, accepting the gallery items
    $trash.droppable({
        accept: "#gallery > li",
        classes: {
            "ui-droppable-active": "ui-state-highlight"
        },
        drop: function(event, ui) {
            deleteImage(ui.draggable);
        }
    });









});