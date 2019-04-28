
var canvas = document.getElementById("Grapf");
var ctx = canvas.getContext("2d");
for(let i=0;i<200;i++){
  ctx.fillStyle = "black";
  ctx.fillRect(i,100,2,2);
  ctx.fillRect(100,i,2,2);
}
