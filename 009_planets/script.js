let digits;
let index = 0;

function randomNumbers(nNumbers,min,max) {
    numbers = [];
    for(let i = 0; i < nNumbers; i++) {
        numbers.push((Math.random() * max) + min);
    }
    return numbers;
}

const width = window.innerWidth;
const height = window.innerHeight;

let colorPallets = [
    ["#F2935C","#F27B50","#F2AB91","#BF4F36"],
    ["#F91722","#E0151F","#B91119","#7A0B11","#3A0508"],
    ["#C004D9","#A904BF","#7C038C","#4F0259","#220126"],
    ["#013A40","#025959","#027368","#04BF9D","#038C73"]
]

let pallet = Math.floor(Math.random() * colorPallets.length);

function preload() {
    digits = randomNumbers(5000,0,10);
}

function setup() {
    createCanvas(width, height);
    background(0);
    stroke(255);
    noFill();
    translate(width / 2, height / 2);
}

function draw() {
    translate(width / 2, height / 2);
    
    const digit = digits[index];
    const nextDigit = digits[index + 1];
    index++;
    
    const diff = TWO_PI / 10;
    
    const a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
    const a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);
    
    const x1 = 300 * cos(a1);
    const y1 = 300 * sin(a1);
    
    const x2 = 300 * cos(a2);
    const y2 = 300 * sin(a2);
    
    let c = Math.floor(Math.random() * colorPallets[0].length);
    let randomColor = color(colorPallets[pallet][c]);
    randomColor.setAlpha(50);
    strokeWeight(digit / 5);
    stroke(randomColor);
    line(x1, y1, x2, y2);
}