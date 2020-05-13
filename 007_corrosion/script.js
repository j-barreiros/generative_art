const width = window.innerWidth;
const height = window.innerHeight;

function setup() {
    createCanvas(width, height);
    frameRate(30);
    //noLoop();
}

function generatePoints(gap,maxSize) {
    let dots = [];
    for (let i = 100; i < height - 100; i += gap) {
        for (let j = 100; j < width - 100; j += gap) {
            let dot = {
                x: j,
                y: i,
                size: Math.random() * maxSize,
                maxSize: maxSize,
                isGrowing: this.size < maxSize ? true : false, 
                color: `rgb(200,10,10)`
            };
            dots.push(dot);
        }
    }
    return dots;
}

function resize(dot) {
    if(dot.isGrowing) {
        dot.size += 0.8;
    } else {
        dot.size -= 0.8;
    }
    
    if(dot.size > dot.maxSize) {
        dot.isGrowing = false;
    } else if(dot.size < 0) {
        dot.isGrowing = true;
    }
    console.log("entrei");
}

let dots = generatePoints(35,40);

function draw() {
    background(0);
    strokeWeight(5);
    for (let i = 0; i < dots.length; i++) {
        point(dots[i].x, dots[i].y);
        stroke(dots[i].color)
        //let size = 8;
        line(dots[i].x, dots[i].y, dots[i].x + dots[i].size, dots[i].y)
        line(dots[i].x, dots[i].y, dots[i].x - dots[i].size, dots[i].y)
        line(dots[i].x, dots[i].y, dots[i].x, dots[i].y + dots[i].size)
        line(dots[i].x, dots[i].y, dots[i].x, dots[i].y - dots[i].size)
        resize(dots[i]);
    }
}