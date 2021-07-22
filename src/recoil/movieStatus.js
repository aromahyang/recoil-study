import { atom, selector } from 'recoil';

function getUrl(type) {
	return `https://api.themoviedb.org/3/movie/${type}?api_key=2c8b8ce437366bb491287d472b2960c4`;
}

export const typeStatus = atom({
	key: 'typeStatus',
	default: 'now_playing',
});

export const movieStatus = selector({
	key: 'movieStatus',
	get: async ({ get }) => {
		const type = get(typeStatus);

		const response = await fetch(getUrl(type), { method: 'GET' });
		const result = await response.json();
		return result.results;
	},
})
