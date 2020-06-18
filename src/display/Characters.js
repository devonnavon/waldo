import { loadCharacters } from '../backend/backend';

const Character = (charObj) => {
	const info = charObj;
	const left = info.coords.top_left;
	const right = info.coords.bottom_right;

	const getArea = () => `${left.x},${left.y},${right.x},${right.y}`;
	const getBox = () => {
		return {
			left: left.x,
			top: left.y,
			width: right.x - left.x,
			height: right.y - left.y,
		};
	};
	const getNameSlug = () => info.name_slug;
	const getName = () => info.getName;
	return { getArea, getBox, getNameSlug, getName };
};

const CharacterDisplay = (() => {
	const nav = document.querySelector('nav');

	const characters = (async () => {
		const charArray = await loadCharacters();
		const newChars = [];
		charArray.forEach((e) => {
			newChars.push(Character(e));
		});
		return newChars;
	})();

	// const buildNav = () => {

	// }

	const render = async () => {
		// buildNav();
		console.log(await characters);
	};
	return { render };
})();

export { CharacterDisplay };
