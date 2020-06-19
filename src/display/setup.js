import img from '../img/scifi.jpg';
// import { loadCharacters } from '../backend/backend';
import { CharacterDisplay } from './Characters';

const render = () => {
	//main container

	const container = document.createElement('div');
	container.setAttribute('id', 'container');
	const img = addImage();
	container.appendChild(img);

	img.addEventListener('mouseup', (e) => {
		console.log(e.target);
		const pop = document.querySelector('.click_pop');
		if (pop != null) pop.remove();

		const span = document.createElement('span');
		span.classList.add('click_pop');
		span.style.left = e.clientX + 'px';
		span.style.top = e.clientY + 'px';

		document.body.appendChild(span);

		// document.body.innerHTML +=
		// 	'<span class="click_pop" style="left:' +
		// 	e.clientX +
		// 	'px;top:' +
		// 	e.clientY +
		// 	'px;"><span/><span/><span/><span/></span>';
	});

	// window.addEventListener('mousedown', (e) => {
	// const pop = document.querySelector('.click_pop');
	// if (pop != null) pop.remove();

	// document.body.innerHTML +=
	// 	'<span class="click_pop" style="left:' +
	// 	e.clientX +
	// 	'px;top:' +
	// 	e.clientY +
	// 	'px;"><span/><span/><span/><span/></span>';
	// });

	// window.addEventListener('mouseup', (e) => {
	// 	const pop = document.querySelector('.click_pop');
	// 	if (pop != null) pop.remove();
	// });

	CharacterDisplay.render();
	document.body.appendChild(container);

	// $(window).mousedown(function (e) {
	// 	$('.click_pop').remove();
	// 	$('body').append(
	// 		'<span class="click_pop" style="left:' +
	// 			e.pageX +
	// 			'px;top:' +
	// 			e.pageY +
	// 			'px;"><span/><span/><span/><span/></span>'
	// 	);
	// });
};

const addImage = () => {
	const mainImg = document.createElement('img');
	mainImg.setAttribute('id', 'mainImg');
	mainImg.src = img;
	mainImg.setAttribute('usemap', '#characterMap');

	return mainImg;
};

const addLeaderboard = () => {
	const leaderboard = document.createElement('div');
	leaderboard.classList.add('leaderboard');
	return leaderboard;
};

const addCharacters = () => {
	const chars = document.createElement('div');
	chars.classList.add('characterList');
	chars.appendChild(createCharacter('WALL-e'));
	chars.appendChild(createCharacter('Harrison Ford (Blade Runner Version)'));
	chars.appendChild(createCharacter('Storm Troopers'));
	chars.appendChild(createCharacter('Men in Black Pug'));
	chars.appendChild(createCharacter('Superman'));

	return chars;
};

const createCharacter = (name) => {
	const char = document.createElement('div');
	char.classList.add('character');
	char.innerHTML = name;
	return char;
};

export { render };
