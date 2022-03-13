const canvas = document.getElementById("piCanvas");
const ctx = canvas.getContext("2d");
var points_in_cirlce = 0;
var points_in_total = 0;


function distance_from_center(x, y, cx, cy) {
	var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy);
	return Math.sqrt(distancesquared);
}

function drawBackground(){
	ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, Math.PI * 2);
    ctx.rect(0,0,canvas.width,canvas.height);
    ctx.stroke();
}

function throw_points(n){
	for(var i = 0; i < n; i++){
		x = Math.floor(Math.random() * canvas.width);
		y = Math.floor(Math.random() * canvas.height);

		ctx.beginPath();
		
		if(distance_from_center(x, y, canvas.width/2, canvas.height/2) <= canvas.width/2){
			points_in_cirlce++;
			ctx.strokeStyle = "red";
		}else{
			ctx.strokeStyle = "green";
		}

		ctx.rect(x, y, 1, 1);
		ctx.stroke();

		points_in_total++;

	}
}

function main(){
	throw_points(500); //throw n random points at a time

	console.log(4*points_in_cirlce/points_in_total);
}

drawBackground();
setInterval(main, 100);