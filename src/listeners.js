const imageClick = (e) => {
	console.log(['layerX: ', e.layerX].join(''));
	console.log(['layerY: ', e.layerY].join(''));
};

const mapTest = (e) => {
	console.log(e.target.coords.split(',').slice(0, 2));
	console.log('pleaase');
	document.querySelector('#fordSquare').style.display = 'block';
};

export { imageClick, mapTest };
