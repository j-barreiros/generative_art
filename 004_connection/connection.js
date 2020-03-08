//Canvas Setup
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');


ctx.lineWidth = 3;

//All Colors for dots and lines
let colorPallet = [
    ["#12FF8E","#10E845","#2AFF1F", "#66E810", "#C3FF12"],
    ["#0A1240","#111C59","#0A31A6","#0396A6", "#04D9D9"],
    ["#F2B705","#F29F05","#F27405","#F24405", "#730202"],
    ["#F21628","#F24B59","#D97179","#BFBDBE","#F20505"],
    ["#0DF205","#0ABF04","#078C03","#055902","#022601"],
    ["#FF156D","#E813CD","#D222FF","#8313E8","#5015FF"],
    ["#C40667","#E81758","#F34145","#FF633C","#FF841B"]
]

//Pick a pallet when the page is loaded
let randomPallet = Math.floor(Math.random() * colorPallet.length);


let arcs = [];

function generateArc(n) {
    for(let i = 1; i <= n; i++){
        arcs.push(
            {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                dX: (Math.random() * 10) - 5,
                dY: (Math.random() * 10) - 5,
                color: colorPallet[randomPallet][Math.floor(Math.random() * colorPallet[randomPallet].length)]
            }
        )
    }

}

function distance(pointA, pointB) {
    let a = pointA.x - pointB.x;
    let b = pointA.y - pointB.y;

    return Math.sqrt( a*a + b*b);
}

function drawLine(arcs) {
    for(i = 0; i < arcs.length; i++) {
        for(j = 0; j < arcs.length; j++) {
            if(arcs[i].color == arcs[j].color && distance(arcs[i], arcs[j]) <= 250) {
                ctx.beginPath();
                ctx.moveTo(arcs[i].x, arcs[i].y);
                ctx.lineTo(arcs[j].x, arcs[j].y);
                ctx.strokeStyle = arcs[i].color;
                ctx.stroke();
            }
        }
    }
}

function draw(arc) {
    ctx.beginPath();
    ctx.arc(arc.x, arc.y, 6, 0, 2 * Math.PI);
    ctx.fillStyle = arc.color;
    ctx.fill();
    
    //Move the dot
    arc.x += arc.dX;
    arc.y += arc.dY;

    if (arc.x + 6 > canvas.width || arc.x + 6 < 0) {//Change X direction if hit a wall
        arc.dX = arc.dX * -1;
    }
    
    if (arc.y + 6 > canvas.height || arc.y + 6 < 0) {//Change Y direction  if hit a wall
        arc.dY = arc.dY * -1;
    }
    
}

generateArc(60);

function animate() {
    requestAnimationFrame(animate);
    
    //Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (i = 0; i < arcs.length; i++) {
        draw(arcs[i]);
    }
    drawLine(arcs);
}

animate();