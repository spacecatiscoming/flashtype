timersDiv.addEventListener('click', function(e){
	e.stopPropagation();

	const clicked = e.target.closest('.func-item');
	let data = clicked.dataset.time;
	if(!clicked) return;
	console.log(Number(data));
	countTimer = Number(data);
});