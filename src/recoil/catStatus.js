import { atom, selector } from 'recoil';

const apiStatus = atom({
	key: 'apiStatus',
	default: ''
});

export const catStatus = selector({
	key: 'catStatus',
	get: ({ get }) => get(apiStatus),
	set: ({ set }, newUrl) => set(apiStatus, newUrl),
});
