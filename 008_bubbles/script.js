const width = window.innerWidth;
const height = window.innerHeight;

function setup() {
    createCanvas(width, height);
    //noLoop();
    noStroke();
    //noFill();
    frameRate(60);
    strokeWeight(2);
}

function generateCircle(gap, minSize, maxSize) {
    let circles = [];
    for (let i = width / 5; i < width - (width / 5); i += gap) {
        for (let j = height / 5; j < height - (height / 5); j += gap) {
            let size = (Math.random() * (maxSize - minSize)) + minSize;
            circles.push(
                {
                    x: i,
                    y: j,
                    actualSize: size,
                    nextSize: (Math.random() * (maxSize - minSize)) + minSize,
                    growing: true
                }
            );
        }
    }
    return circles;
}

function resizeCircles(circle, minSize, maxSize, speed) {
    if (circle.growing) {
        circle.actualSize += speed;
        circle.x += 0.05;
        circle.y -= 0.05;

        if (Math.floor(circle.actualSize) > circle.nextSize) {
            circle.nextSize = (Math.random() * (maxSize - minSize)) + minSize;
            circle.growing = Math.floor(circle.actualSize) <= circle.nextSize ? true : false;
        }

    } else {
        circle.actualSize -= speed;
        circle.x -= 0.05;
        circle.y += 0.05;

        if (Math.floor(circle.actualSize) < circle.nextSize) {
            circle.nextSize = (Math.random() * (maxSize - minSize)) + minSize;
            circle.growing = Math.floor(circle.actualSize) <= circle.nextSize ? true : false;
        }
    }
}

let circles = generateCircle(25, 1, 25);
console.log(circles);

function draw() {
    background('black')
    for (let i = 0; i < circles.length; i++) {
        fill('blue')
        circle(circles[i].x, circles[i].y, circles[i].actualSize);
        resizeCircles(circles[i], 1, 30, 0.1);
    }
}