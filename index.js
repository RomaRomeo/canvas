const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
        ctx.fill();
        } else {
        ctx.stroke();
        }
    };

function drawSnowman(x, y) {
    ctx.fillStyle = "Black";
    ctx.lineWidth = 4;

    circle(x + 50, y + 110, 40, false);
    circle(x + 50, y + 40, 30, false);
    circle(x + 40, y + 35, 5, true);
    circle(x + 60, y + 35, 5, true);

    circle(x + 50, y + 90, 5, true);
    circle(x + 50, y + 110, 5, true);
    circle(x + 50, y + 130, 5, true);

    ctx.fillStyle = "Orange";
    circle(x + 50, y + 45, 5, true);
};  

drawSnowman(0, 0);
drawSnowman(100, 20);
    