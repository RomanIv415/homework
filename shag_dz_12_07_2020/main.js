const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');
const tColor = 555;
let dateArr = ["2018", "2018", "2018", "2019", "2019", "2019", "2020", "2020", "2020"];
let dateArrName = ["React JS", "Vue JS", "Angular Core/CLI", "React JS", "Vue JS", "Angular Core/CLI", "React JS", "Vue JS", "Angular Core/CLI",];
let colorArr = ["3a3df2", "ebd32d", "58f23a", "3a3df2", "ebd32d", "58f23a", "3a3df2", "ebd32d", "58f23a",]
canvas.width = 1000;
canvas.height = 600;
const chartData = {
    "2018": {
        "React JS": 315174,
        "Vue JS": 219930,
        "Angular Core/CLI": 531000
    },
    "2019": {
        "React JS": 335174,
        "Vue JS": 251930,
        "Angular Core/CLI": 173000
    },
    "2020": {
        "React JS": 385174,
        "Vue JS": 291930,
        "Angular Core/CLI": 123000
    },
}

function drawLine (x1, y1, x2, y2, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = width;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function drawDottedLine (x1, y1, x2, y2, space, long, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = width;
    ctx.setLineDash([long, space]);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
function drawTable (x1, y1, x2, y2, quantityLines, spaceDottedLine, long, width, colorLine, colorDottedLine) {
    const dx = x2-x1;
    const dy = (y1-y2)/quantityLines;
    for(let i=0; i<(quantityLines); i++){
        if (i===0){
            drawLine(x1, y1, x2, y1, width, colorLine);
        }
        else{
            drawDottedLine(x1, y1-dy*i,x1 + dx, y1-dy*i, spaceDottedLine, long, width, colorDottedLine);
        }
    }
}
function drawDate (text, x, y) {
    ctx.beginPath();
    ctx.font = "22px Verdana";
    ctx.fillStyle = `#${tColor}`;
    ctx.fillText(text, x, y);
    ctx.fill();
}
function drawColumn (x, part, full, color){
    ctx.beginPath();
    ctx.fillStyle = `#${color}`;
    ctx.fillRect(x, 140 + 360 - (part*360)/full, 50, (part*360)/full);
    ctx.fill();

}
function drawColumns () {
    let Indentation = 75;
    for(let i = 0; i < 9; i++){
        if (i == 2 || i == 5){
            drawColumn(Indentation, chartData[`${dateArr[i]}`][`${dateArrName[i]}`], chartData[`${dateArr[i]}`]["React JS"] + chartData[`${dateArr[i]}`]["Vue JS"] + chartData[`${dateArr[i]}`]["Angular Core/CLI"], colorArr[i]);
            Indentation += 100;
        }
        else{
            drawColumn(Indentation, chartData[`${dateArr[i]}`][`${dateArrName[i]}`], chartData[`${dateArr[i]}`]["React JS"] + chartData[`${dateArr[i]}`]["Vue JS"] + chartData[`${dateArr[i]}`]["Angular Core/CLI"], colorArr[i]);
            Indentation += 50;
        }
    }
}
function drawPoint(text, x, y, color, font, fontSize){
    ctx.beginPath();
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = 7;
    ctx.lineCap = "round";
    ctx.moveTo(x, y);
    ctx.lineTo(x+30, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = `#${tColor}`;
    ctx.fillText(text, x+50, y+5);
    ctx.fill();
}
/*function drawStroke (x, y, color) {
    ctx.beginPath();
    ctx.strokeStyle = `#${color}`;
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.moveTo(x, y);
    ctx.lineTo(x+130, y);
    ctx.stroke();
}
function drawText (text, x, y, font, fontSize){
    ctx.beginPath();
    ctx.font = `${fontSize}px ${font}`;
    ctx.fillStyle = `#${tColor}`;
    ctx.fillText(text, x+50, y);
    ctx.fill();
}*/


drawTable(50, 500, 650, 50, 5, 2, 5, 2, 000, 999);
for(let i = 0; i < 9; i += 3){
    drawDate(dateArr[i], 70+i*245/3, 550);
}
drawColumns();

for(let i=0; i<3; i++){
    drawPoint(dateArrName[i], 700, 250+50*i, colorArr[i], 'Verdana', 18);
}