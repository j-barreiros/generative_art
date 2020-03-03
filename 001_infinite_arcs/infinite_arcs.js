//Canvas Setup
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

//Background
ctx.fillStyle = "#252525";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//Arc variables
let radius = 0;
let size = 5;
let randomColor = 0;
let lineColors = [
    ["#D90416","#8C041D","#40030E","#2F4659","#0D0D0D"],
    ["#570072", "#D44CFF", "#B800F2", "#5F2272", "#9100BF"],
    ["#D070E3", "#B875ED", "#9175D6", "#7876ED", "#718DE3"],
    ["#F21DE4", "#0439D9", "#0433BF", "#032CA6", "#5F7ED9"],
    ["#020873", "#010440", "#0528F2", "#0554F2", "#0583F2"],
    ["#0E08A6", "#0540F2", "#0F2F8C", "#08A630", "#0DF205"],
    ["#55FF4C", "#067F00", "#0CFF00", "#2A7F26", "#09CC00"],
    ["#F2B33D", "#F29544", "#F28444", "#F26444", "#F25041"],
    ["#D60460", "#E80C3C", "#FF0000", "#E81A0C", "#FF2C0D"],
    ["#F2E205", "#D9B70D", "#A68112", "#735A10"]
]
//Define a new pallet every page refresh
let randomPallet = Math.floor(Math.random() * lineColors.length);
let velocity = 0.03;
let randomWidth = 2;

//Arc animation
function animate() {
    requestAnimationFrame(animate);

    ctx.beginPath();
    ctx.arc(canvas.width /2, canvas.height /2, size, 0, Math.PI * radius, false);
    ctx.strokeStyle = lineColors[randomPallet][randomColor];
    ctx.lineWidth = randomWidth;
    ctx.stroke();

    if(radius >= 2.5) {//Verify if arc is completed
        radius = 0;
        randomWidth = Math.floor(Math.random() * 10) + 1;
        size += randomWidth + 5;
        randomColor = Math.floor(Math.random() * lineColors[randomPallet].length);
        velocity += 0.05;

    } else {
        radius += velocity;
    }
}

animate()
