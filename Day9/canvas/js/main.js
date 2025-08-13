const btn= document.querySelector("button");
let color=document.querySelector("input[type='color']");
const canvas = document.querySelector("canvas");
const circle = canvas.getContext("2d");



btn.addEventListener("click", () => {
    circle.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i < 40; i++) {  
        drawCircle();
    }
    canvas.style=`border: 2px solid ${color.value};`;
});
function drawCircle() {
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    circle.beginPath();
    circle.strokeStyle = color.value;
    circle.arc(x, y, 10, 0, Math.PI * 2);
    circle.stroke();
}


