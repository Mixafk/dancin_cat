const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
let eyes = [];
let theta;
const mouse = {
    x: undefined,
    y: undefined
};
window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX - canvas.getBoundingClientRect().left;
    mouse.y = e.clientY - canvas.getBoundingClientRect().top;
});
 
class Eye {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        theta = Math.atan2(dy, dx);    
        
        // глаз
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();
        ctx.closePath();
        
        // радужная оболочка
        let iris_x = this.x + Math.cos(theta) * this.radius / 10;
        let iris_y = this.y + Math.sin(theta) * this.radius / 10;
        let irisRadius = this.radius / 1.2;
        ctx.beginPath();
        ctx.arc(iris_x, iris_y, irisRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();
        
        // зрачок
        let pupilRadius = this.radius / 2.5;
        let pupil_x = this.x + Math.cos(theta) * this.radius / 1.9;
        let pupil_y = this.y + Math.sin(theta) * this.radius / 1.9;
        ctx.beginPath();
        ctx.arc(pupil_x, pupil_y, pupilRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();
        
        
    }
}
function init() {
    eyes = [];
    eyes.push(new Eye(102, 105, 6))
    eyes.push(new Eye(181, 130, 6))
    
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(191, 226, 255, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].draw();
    }
}
init();
animate();
window.addEventListener("resize", function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    init();
})
