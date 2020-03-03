//Canvas Setup
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let lines = [];
let linesGap = 0.5;
ctx.lineWidth = 6;
let lineColors = [
    ["#0000FF","#5E00FF","#9F00FF","#D808FF","#FF00C7"],
    ["#890ABF","#57078C","#2F0459","#0A2740","#1C0340"],
    ["#020873","#010440","#0528F2","#0554F2","#0583F2"],
    ["#013A40","#025959","#027368","#04BF9D","#038C73"],
    ["#0433BF","#0339A6","#03318C","#0DF205","#0ABF04"],
    ["#049DD9","#05C7F2","#05DBF2","#2EF2F2","#79F2F2"],
    ["#F20505","#A60303","#730202","#400101","#0D0D0D"],
    ["#F2F2F2","#A6A6A6","#595959","#262626","#0D0D0D"],
    ["#2E2D40","#5EBF64","#5BA660","#3DA62D","#262626"],
    ["#B527F2","#B963F2","#8736D9","#010440","#272D40"],
    ["#F21628","#F24B59","#D97179","#F20505","#BFBDBE"]
]
//Pick a random Pallet when the page is loaded
let randomPallet = Math.floor(Math.random() * lineColors.length)

//Create Lines
for (let i = 0; i <= canvas.width; i += linesGap) {
    let line = [];
    for (j = 0; j <= canvas.height * 2; j += 100) {
        let random = Math.random() * 150;
        if(Math.random() <= 0.5) {//Turns negative
            random *= -1;
        }
        let point = {x: i + random, y: j};
        line.push(point)
    }
    lines.push(line);
}

//Draw Lines
for (let i = 0; i < lines.length; i++) {
    ctx.beginPath();
    ctx.moveTo(lines[i][0].x, lines[i][0].y);
    for (let j = 0; j < lines[i].length - 1; j++) {
        let xc = (lines[i][j].x + lines[i][j + 1].x) / 2;
        let yc = (lines[i][j].y + lines[i][j + 1].y) / 2;
        ctx.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc);
    }
    //Pick a random color for each line
    ctx.strokeStyle = lineColors[randomPallet][Math.floor(Math.random() * lineColors[2].length)];
    ctx.stroke();
}
