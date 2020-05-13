function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    strokeWeight(5);
    //noLoop();
}

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

function generatePoints(gap) {
    let points = [];
    for (let i = gap; i <= canvasWidth - gap; i += gap) {
        let dot = { x: i, y: 0 + Math.floor(((Math.random() * 250) - 150))};
        points.push(dot);
    }
    return points;
}

function generateLines(points) {
    let lines = [];
    for (let i = 0; i < points.length - 1; i++) {
        l = { x1: points[i].x, y1: points[i].y, x2: points[i + 1].x, y2: points[i + 1].y }
        lines.push(l);
    }
    return lines;
}

function linesAreEqual(line1, line2) {
    let equal = true;
    for(let i = 0; i < line1.length; i++) {
        if(Math.abs(line1[i].y1 - line2[i].y1) >= 5) {
            equal = false;
        }

        if(Math.abs(line1[i].y2 - line2[i].y2) >= 5) {
            equal = false;
        }
    }
    return equal;
}

function drawLines(lines, color) {
    light = 90;
    for (let j = 200; j <= canvasHeight - 100; j += 30) {
        stroke(`hsl(${color}, 100%, ${light}%)`)
        for (let i = 0; i < lines.length; i++) {
            line(lines[i].x1, lines[i].y1 + j, lines[i].x2, lines[i].y2 + j);
        }
        light -= 2;
    }
}

let points = generatePoints(100);
let lines = generateLines(points);

let points2 = generatePoints(100);
let lines2 = generateLines(points2);

let color = Math.floor(Math.random() * 255);

function draw() {
    background(0);
    drawLines(lines,color);
    if(linesAreEqual(lines, lines2)) {
        points2 = generatePoints(100);
        lines2 = generateLines(points2);
    }
    for(let i = 0; i < lines.length; i++){
        if(lines[i].y1 < lines2[i].y1) {
            lines[i].y1 += 3;
        }
        if(lines[i].y1 > lines2[i].y1) {
            lines[i].y1 -= 3;
        }

        if(lines[i].y2 < lines2[i].y2) {
            lines[i].y2 += 3;
        }
        if(lines[i].y2 > lines2[i].y2) {
            lines[i].y2 -= 3;
        }
    }
    

    console.log(`linhas iguais = ${linesAreEqual(lines, lines2)} ... ${lines[0].y1} - ${lines2[0].y1}`)
}