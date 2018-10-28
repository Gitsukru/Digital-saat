function drawEpoch() {
    $("#epochinput").val(Number(Date.now().toString()));
}


function drawTime(h1224) {

    let options = {
        hour: "2-digit",
        hour12: h1224,
        minute: "2-digit",
        second: "2-digit"
    };
    let currDate = new Date();
    let hms = currDate.toLocaleDateString('de-DE', options).split(",")[1];
    let ms = currDate.getMilliseconds();
    $(".tarihSaatinput").val(hms + ':' + ms);

}

let isDragAndDropActive = false;
let offsetX = null;
let offsetY = null;
let main = $("#main");
let html = $("html");

main.mousedown(function (event) {
    isDragAndDropActive = true;
    offsetX = event.pageX - Number(main.css("left").split("px")[0]);
    offsetY = event.pageY - Number(main.css("top").split("px")[0]);
    main.css("backgroundColor", "red");
});
html.mouseup(function () {
    isDragAndDropActive = false;
    offsetX = null;
    offsetY = null;

});

html.mousemove(function (event) {
    if (isDragAndDropActive) {
        main.css("left", (event.pageX - offsetX) + "px");
        main.css("top", (event.pageY - offsetY) + "px");
    }
});