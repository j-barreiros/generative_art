//Canvas Setup
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let gap = 10;
let color = 50;

let red = Math.floor(Math.random() * 255);
console.log(red);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

for(i = 0; i <= canvas.width + gap; i += gap) {
    for(j = 0; j <= canvas.height + gap; j += gap) {
        if(Math.random() <= 0.5){
            red += 1;
            green += 1;
            blue += 1;
            ctx.fillStyle = `rgb(${red}, ${green / 2}, ${blue * 2})`;
        } else {
            red -= 1;
            green -= 1;
            blue -= 1;
            ctx.fillStyle = `rgb(${red}, ${green / 2}, ${blue * 2})`;
        }


        ctx.fillRect(i,j,i+gap,j+gap);
    }
} 