// Canvas - Pirate Ship

// Canvas Setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 500;

// Sky
var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "lightblue");
grd.addColorStop(1, "lightyellow");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 500);

// Island Left
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "yellow";

var grd = ctx.createLinearGradient(0, 0, 500, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "greenyellow");
ctx.fillStyle = grd;
ctx.arc(100, 400, 150, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Island Right
ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = "yellow";
var grd = ctx.createLinearGradient(0, 0, 1000, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "greenyellow");
ctx.fillStyle = grd;
ctx.arc(400, 400, 200, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

// Ship Body
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.arc(250, 300, 80, 0, Math.PI);
ctx.fill();

// Ship Pole
ctx.fillStyle = "dark orange";
ctx.fillRect(240, 150, 15, 200);

// Ship Flag
ctx.lineWidth = 1;
ctx.fillStyle = "white";

ctx.beginPath();
ctx.moveTo(255, 150);
ctx.lineTo(255, 220);
ctx.lineTo(350, 185);
ctx.lineTo(255, 150);
ctx.fill();

// Cannons
ctx.beginPath();
ctx.fillStyle = "grey";
ctx.arc(250, 325, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(250, 325, 7, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "grey";
ctx.arc(200, 325, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(200, 325, 7, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "grey";
ctx.arc(300, 325, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "black";
ctx.arc(300, 325, 7, 0, 2 * Math.PI);
ctx.fill();

// Sea

var grd = ctx.createLinearGradient(100, 100, 0, 250);
grd.addColorStop(0, "blue");
grd.addColorStop(1, "darkblue");
ctx.fillStyle = grd;
ctx.fillRect(0, 350, 500, 150);

// Trees

ctx.fillStyle = "maroon";
ctx.fillRect(20, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(25, 280);
ctx.lineTo(10, 320);
ctx.lineTo(40, 320);
ctx.lineTo(25, 280);
ctx.fill();

ctx.fillStyle = "maroon";
ctx.fillRect(60, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(65, 280);
ctx.lineTo(50, 320);
ctx.lineTo(80, 320);
ctx.lineTo(65, 280);
ctx.fill();

ctx.fillStyle = "maroon";
ctx.fillRect(100, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(105, 280);
ctx.lineTo(90, 320);
ctx.lineTo(120, 320);
ctx.lineTo(105, 280);
ctx.fill();

ctx.fillStyle = "maroon";
ctx.fillRect(480, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(485, 280);
ctx.lineTo(470, 320);
ctx.lineTo(500, 320);
ctx.lineTo(485, 280);
ctx.fill();

ctx.fillStyle = "maroon";
ctx.fillRect(450, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(455, 280);
ctx.lineTo(440, 320);
ctx.lineTo(470, 320);
ctx.lineTo(455, 280);
ctx.fill();

ctx.fillStyle = "maroon";
ctx.fillRect(430, 300, 10, 50);
ctx.beginPath();
ctx.fillStyle = "darkgreen";
ctx.moveTo(435, 280);
ctx.lineTo(420, 320);
ctx.lineTo(450, 320);
ctx.lineTo(435, 280);
ctx.fill();

// Fish

ctx.lineWidth = 10;
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(220, 400, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.lineWidth = 10;
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(440, 400, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.lineWidth = 10;
ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.arc(300, 450, 10, 0, 2 * Math.PI);
ctx.fill();

// Fish Tail
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.moveTo(220, 400);
ctx.lineTo(240, 410);
ctx.lineTo(240, 390);
ctx.lineTo(220, 400);
ctx.fill();

ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(440, 400);
ctx.lineTo(460, 410);
ctx.lineTo(460, 390);
ctx.lineTo(440, 400);
ctx.fill();

ctx.fillStyle = "cyan";
ctx.beginPath();
ctx.moveTo(300, 450);
ctx.lineTo(320, 460);
ctx.lineTo(320, 440);
ctx.lineTo(300, 450);
ctx.fill();

// Clouds
ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(100, 100, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(140, 100, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(160, 100, 30, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(120, 80, 30, 0, 2 * Math.PI);
ctx.fill();

// Sun
ctx.beginPath();
ctx.fillStyle = "yellow";
ctx.arc(450, 80, 30, 0, 2 * Math.PI);
ctx.fill();

// Underwater Stone
ctx.fillStyle = "grey";
ctx.beginPath();
ctx.moveTo(0, 500);
ctx.lineTo(50, 500);
ctx.lineTo(25, 450);
ctx.lineTo(0, 500);
ctx.fill();
ctx.beginPath();
ctx.moveTo(200, 500);
ctx.lineTo(250, 500);
ctx.lineTo(225, 450);
ctx.lineTo(200, 500);
ctx.fill();
ctx.beginPath();
ctx.moveTo(100, 500);
ctx.lineTo(150, 500);
ctx.lineTo(125, 425);
ctx.lineTo(100, 500);
ctx.fill();
ctx.beginPath();
ctx.moveTo(40, 500);
ctx.lineTo(140, 500);
ctx.lineTo(80, 405);
ctx.lineTo(40, 500);
ctx.fill();
ctx.beginPath();
ctx.moveTo(440, 500);
ctx.lineTo(490, 500);
ctx.lineTo(480, 405);
ctx.lineTo(440, 500);
ctx.fill();
ctx.beginPath();
ctx.moveTo(340, 500);
ctx.lineTo(240, 500);
ctx.lineTo(380, 405);
ctx.lineTo(340, 500);
ctx.fill();

// Text
ctx.font = "15px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by M. Le", 400, 490);

// Ship Stand
ctx.fillStyle = "brown";
ctx.rotate((-20 * Math.PI) / 180);
ctx.fillRect(200, 395, 50, 10);
