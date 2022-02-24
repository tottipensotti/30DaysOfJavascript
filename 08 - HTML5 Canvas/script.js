const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

// resize the canvas to the width and height of the browser window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// line styles
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
let hue = 0;

// only draws when the mouse is pressed down
let isDrawing = false;

// where we start and end the line, base color
let lastX = 0;
let lastY = 0;


function draw(e) {
  // stop the function from running when the mouse is not down
  if(!isDrawing) return;
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX,lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;

}

// add events listeners to activate the function only when the mouse is pressde down
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) =>{
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
