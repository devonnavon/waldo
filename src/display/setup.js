import img from '../img/scifi.jpg';
import { imageClick, mapTest } from './listeners';
// import { loadCharacters } from '../backend/backend';
import { CharacterDisplay } from './Characters';

const render = () => {
	//main container
	CharacterDisplay.render();

	const container = document.createElement('div');
	container.classList.add('container');

	container.appendChild(addImage());
	container.appendChild(buildNav());
	container.appendChild(addLeaderboard());

	container.appendChild(fordSquare());

	const map = document.createElement('map');
	map.name = 'characterMap';
	const ford = document.createElement('area');
	ford.setAttribute('shape', 'rect');
	ford.setAttribute('coords', '439,1385,469,1425');
	ford.addEventListener('click', mapTest);
	map.appendChild(ford);
	container.appendChild(map);

	document.body.appendChild(container);
};

const fordSquare = () => {
	const fordSquare = document.createElement('div');
	fordSquare.setAttribute('id', 'fordSquare');
	fordSquare.style.left = '439px';
	fordSquare.style.top = '1385px';
	return fordSquare;
};

const buildNav = () => {
	const nav = document.createElement('div');
	nav.classList.add('nav');
	const title = document.createElement('div');
	title.classList.add('title');
	title.innerHTML = 'Where... where are these guys';
	nav.appendChild(title);
	nav.appendChild(addCharacters());
	return nav;
};

const addImage = () => {
	const mainImg = document.createElement('img');
	mainImg.setAttribute('id', 'mainImg');
	mainImg.src = img;
	mainImg.setAttribute('usemap', '#characterMap');
	mainImg.addEventListener('click', imageClick);
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
