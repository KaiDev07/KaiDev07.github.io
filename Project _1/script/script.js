$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("Уменьшить");
        }
        else {
            $(".expand-btn").html("Расширить");
        }
    });
    $(".play-btn").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".modal-close").click(function () {
        $(".modal-canvas").toggleClass("hidden");
    });
    $(".input-button").click(function () {
        let info = $(".info")[0].value;
        alert(info);
    });
    let dropMenu = $(".drop-menu");
    $(".header-bars").click(function () {
        dropMenu.toggleClass("hidden");
    });
    $(".drop-menu-close").click(function () {
        dropMenu.toggleClass("hidden");
    });
});