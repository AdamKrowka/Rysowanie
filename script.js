var buttonColor = document.getElementById("inputColorPicker");
var eraser = document.getElementById('eraser');

eraser.onclick = function () {
    erase();
};


buttonColor.onfocus = function () {
    StopDrowing();
};
buttonColor.onblur = function () {
    StartDrowing();
};

function erase() {
    if (EraserTest == 0) {
        EraserTest = 1;
        eraser.style.boxShadow = "0px 0px 45px 12px rgba(255,255,255,1)";
    } else {
        EraserTest = 0;
        eraser.style.boxShadow = "0px 0px 45px 12px rgba(255,255,255,0)";
    }
    console.log(EraserTest);
}

function StopDrowing() {
    inputTest = 1;


}

function StartDrowing() {
    inputTest = 0;


}