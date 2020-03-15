
//All the colors for dots and lines
let colors = [
    ["#323232", "#ff1e56", "#ffac41"],
    ["#efb1ff", "#7f78d2", "#481380"],
    ["#0f4c81", "#ed6663", "#ffa372"],
    ["#b21f66", "#fe346e", "#ffbd69"],
    ["#fec24a", "#ae2a2f", "#e7272d"],
    ["#a6b1e1", "#dcd6f7", "#f4eeff"],
    ["#0fabbc", "#12cad6", "#fa163f"]
];

//All the colors for the backgrounds. (must be the same size as the array color)
let backgrounds = ["#000000", "#ffe2ff", "#1b262c", "#381460", "#f6e5e4", "#424874", "#e4f9ff"]

//Chosse a color pallet every page refresh
let pallet = Math.floor(Math.random() * colors.length);

function generatePoints() {
    let points = [];
    for (let i = -10; i < width; i += 20) {
        let line = [];
        for (let j = -10; j < height; j += 20) {
            let point = { x: i, y: j, color: colors[pallet][Math.floor(Math.random() * colors[pallet].length)] };
            line.push(point);
        }
        points.push(line);
    }
    return points;
}

function generateLines(points) {
    let lines = [];
    for (let i = 1; i < points.length - 1; i++) {
        for (let j = 1; j < points[i].length - 1; j++) {
            if (points[i][j].color == points[i - 1][j].color) { // UP
                let line= { x1: points[i][j].x, y1: points[i][j].y, x2: points[i - 1][j].x, y2: points[i - 1][j].y, color: points[i][j].color }
                lines.push(line);
            }

            if (points[i][j].color == points[i + 1][j].color) { // DOWN
                let line= { x1: points[i][j].x, y1: points[i][j].y, x2: points[i + 1][j].x, y2: points[i + 1][j].y, color: points[i][j].color }
                lines.push(line);
            }
            
            if (points[i][j].color == points[i][j - 1].color) { // LEFT
                let line= { x1: points[i][j].x, y1: points[i][j].y, x2: points[i][j - 1].x, y2: points[i][j - 1].y, color: points[i][j].color }
                lines.push(line);
            }
            
            if (points[i][j].color == points[i][j + 1].color) { // RIGHT
                let line= { x1: points[i][j].x, y1: points[i][j].y, x2: points[i][j + 1].x, y2: points[i][j + 1].y, color: points[i][j].color }
                lines.push(line);
            }
        }
    }
    return lines;
}

let width = window.innerWidth;
let height = window.innerHeight;

let points = generatePoints();
let lines = generateLines(points);

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    noLoop();
    background(backgrounds[pallet]);
}

function draw() {
    //Draw points
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points[i].length; j++) {
            strokeWeight(9);
            stroke(points[i][j].color)
            point(points[i][j].x, points[i][j].y);
        }
    }

    //Draw Lines
    for (let i = 0; i < lines.length; i++) {
        strokeWeight(3);
        stroke(lines[i].color);
        line(lines[i].x1, lines[i].y1, lines[i].x2, lines[i].y2);
    }
} 