import { loadCharacters } from '../backend/backend';

const Character = (charObj) => {
	const info = charObj;
	const left = info.coords.top_left;
	const right = info.coords.bottom_right;

	const getArea = () => `${left.x},${left.y},${right.x},${right.y}`;
	const getBox = () => {
		return {
			left: left.x + 'px',
			top: left.y + 'px',
			width: right.x + 6 - left.x + 'px',
			height: right.y + 6 - left.y + 'px',
		};
	};
	const getNameSlug = () => info.name_slug;
	const getName = () => info.name;
	return { getArea, getBox, getNameSlug, getName };
};

const CharacterDisplay = (() => {
	const nav = document.querySelector('nav');

	const getCharacters = async () => {
		const charArray = await loadCharacters();
		const newChars = [];
		charArray.forEach((e) => {
			newChars.push(Character(e));
		});
		return newChars;
	};

	const buildNav = (characters) => {
		const nav = document.createElement('div');
		nav.classList.add('nav');
		//create title div
		const title = document.createElement('div');
		title.classList.add('title');
		title.innerHTML = 'Where... where are these guys';
		//create div for character list
		const chars = document.createElement('div');
		chars.classList.add('characterList');
		characters.forEach((char) => {
			const charDiv = document.createElement('div');
			charDiv.id = `list-${char.getNameSlug()}`;
			charDiv.innerHTML = char.getName();
			chars.appendChild(charDiv);
		});
		nav.appendChild(title);
		nav.appendChild(chars);
		document.getElementById('container').appendChild(nav);
	};

	const buildSquares = (characters) => {
		characters.forEach((char) => {
			const square = document.createElement('div');
			const boxCoords = char.getBox();
			square.classList.add('square');
			square.id = `square-${char.getNameSlug()}`;
			square.style.top = boxCoords.top;
			square.style.left = boxCoords.left;
			square.style.width = boxCoords.width;
			square.style.height = boxCoords.height;
			document.getElementById('container').appendChild(square);
		});
	};

	const buildMap = (characters) => {
		const map = document.createElement('map');
		map.name = 'characterMap';

		characters.forEach((char) => {
			const area = document.createElement('area');
			area.shape = 'rect';
			area.coords = char.getArea();
			area.addEventListener('click', (e) => {
				areaListener(e, char);
			});
			map.appendChild(area);
		});

		document.getElementById('container').appendChild(map);
	};

	const areaListener = (e, char) => {
		console.log(char.getName());
		const slug = char.getNameSlug();
		const listItem = document.getElementById(`list-${slug}`);
		const square = document.getElementById(`square-${slug}`);
		listItem.style.textDecoration = 'line-through';
		square.style.display = 'block';
	};

	const render = async () => {
		const characters = await getCharacters();
		buildNav(characters);
		buildSquares(characters);
		buildMap(characters);
	};
	return { render };
})();

export { CharacterDisplay };
