const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 600;
let dateArr = ["2018", "2019", "2020"];
function drawLine (x1, y1, x2, y2, width, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = width;
    ctx.stroke();
}
function drawDottedLine (x1, y1, x2, y2, space, long, width, color) {
    ctx.beginPath();
    ctx.setLineDash([long, space]);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = width;
    ctx.stroke();
}
function drawСolumn () {
    ctx.beginPath();
    ctx.fillStyle = "#fa3";
    ctx.fillRect(50, 250, 50, 249);
    ctx.fill();
}
function drawDate (text, x, y) {
    ctx.beginPath();
    ctx.font = "22px Verdana";
    ctx.fillStyle = '#555';
    ctx.fillText(text, x, y);
    ctx.fill();
}
drawLine(50, 500, 500, 500);
drawDottedLine(50, 420, 500, 420, 5, 10, 2, 'ddd');
drawDottedLine(50, 340, 500, 340, 5, 10, 2, 'ddd');
drawDottedLine(50, 260, 500, 260, 5, 10, 2, 'ddd');
drawDottedLine(50, 180, 500, 180, 5, 10, 2, 'ddd');
drawСolumn();
for(let i = 0; i < 3; i++){
    drawDate(dateArr[i], 70+175*i, 550);
}