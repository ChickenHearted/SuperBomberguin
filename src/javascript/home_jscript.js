
var canvas = document.getElementById('canvas');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

var ctx = canvas.getContext('2d');

var image = new Image();
image.src = 'images/superBomberguin.jpg';
ctx.drawImage(image, 20, 25, 700, 250);
var image = new Image();
image.src = 'images/snowflakes.png';
ctx.drawImage(image, 20, 420, 250, 250);
var image = new Image();
image.src = 'images/bomb.png';
ctx.drawImage(image, 320, 25, 100, 100);
