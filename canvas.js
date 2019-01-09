var canvas = document.getElementById('mainCanvas');
var body = document.getElementById('body');
var height = body.clientHeight;
var width = body.clientWidth;
canvas.height = height;
canvas.width = width;
var c = canvas.getContext('2d');

var input = document.getElementById('inputColorPicker');
var LineColor;
var mouse = {
    x: undefined,
    y: undefined
}
var inputTest = 0;
var EraserTest = 0;

window.addEventListener('mousedown', function (event) {
    if (inputTest == 0) {
        LineColor = input.style.backgroundColor;
        if (EraserTest == 0)
            c.strokeStyle = LineColor;
        if (EraserTest == 1)
            c.strokeStyle = "white";
        c.beginPath();
    }
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        if (inputTest == 0)
            line();
    });
});

window.addEventListener('mouseup', function (event) {
    c.strokeStyle = "transparent";
    c.beginPath();
});




function line() {
    c.lineTo(mouse.x, mouse.y);
    if (EraserTest == 0)
        c.lineWidth = 10;
    if (EraserTest == 1)
        c.lineWidth = 80;


    c.stroke();
}

// function drew(n) {

//     c.beginPath();
//     c.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2, false)
//     c.fillStyle = "red";
//     c.fill();
//     c.strokeStyle = "goldenrod";
//     c.lineWidth = 2;
//     c.stroke();
// }

// function update() {
//     c.beginPath();
//     c.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2, false)
//     c.fillStyle = "red";
//     c.fill();
//     c.strokeStyle = "goldenrod";
//     c.lineWidth = 2;
//     c.stroke();
// }



// function dot(color) {
//     cd.arc(mouse.x, mouse.y, 5, 0, 2 * Math.PI);
//     cd.fillStyle = color;
//     cd.fill();

// }


// var mc = {
//     x: undefined,
//     y: undefined
// }

// window.addEventListener('mousemove', function (event) {
//     mc.x = event.x;
//     mc.y = event.y;
//     var pixel = c.getImageData(mc.x, mc.y, 1, 1).data;
//     console.log(pixel[1] + " " + pixel[2] + " " + pixel[3]);
//     var r = pixel[1];
//     var g = pixel[2];
//     var b = pixel[3];
//     var color = "rgb(" + r + "," + g + "," + b + ")";
//     dot(color);



// });