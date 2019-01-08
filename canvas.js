var canvas = document.querySelector('canvas');
var body = document.getElementById('body');
var height = body.clientHeight;
var width = body.clientWidth;
canvas.height = height;
canvas.width = width;
var c = canvas.getContext('2d');


var mouse = {
    x: undefined,
    y: undefined
}


window.addEventListener('mousedown', function (event) {
    c.strokeStyle = "black";
    c.beginPath();
    window.addEventListener('mousemove', function (event) {
        mouse.x = event.x;
        mouse.y = event.y;
        line();

    });
});

window.addEventListener('mouseup', function (event) {
    c.strokeStyle = "transparent";
    c.beginPath();
});

function drew(n) {

    c.beginPath();
    c.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2, false)
    c.fillStyle = "red";
    c.fill();
    c.strokeStyle = "goldenrod";
    c.lineWidth = 2;
    c.stroke();
}

function update() {
    c.beginPath();
    c.arc(mouse.x, mouse.y, 15, 0, Math.PI * 2, false)
    c.fillStyle = "red";
    c.fill();
    c.strokeStyle = "goldenrod";
    c.lineWidth = 2;
    c.stroke();
}

function line() {

    c.lineTo(mouse.x, mouse.y);
    c.lineWidth = 10;
    c.stroke();
}
var i = 0;

c.beginPath();
c.moveTo(mouse.x, mouse.y);

function move() {
    requestAnimationFrame(move);
    // c.clearRect(0, 0, canvas.width, canvas.height);
    // if (i == -10 || i == 10) {
    //     // drew();
    //     i = -i;
    // }
    // i++;
    // line();
}
move();