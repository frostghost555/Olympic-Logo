canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
ctx.beginpath();
ctx.strokeStyle="grey";
ctx.lineWidth = 4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle="blue";
ctx.lineWidth = 5;
ctx.rect(250,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle="black";
ctx.lineWidth = 5;
ctx.rect(350,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle="red";
ctx.lineWidth = 5;
ctx.rect(450,210,40,0,2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle="yellow";
ctx.lineWidth = 5;
ctx.rect(225,30,40,0,2*Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle="green";
ctx.lineWidth = 5;
ctx.rect(235,30,40,0,2*Math.PI);
ctx.stroke();