import { atom, selector } from 'recoil';

const apiState = atom({
	key: 'apiState',
	default: ''
});

export const catState = selector({
	key: 'catState',
	get: ({ get }) => get(apiState),
	set: ({ set }, newUrl) => set(apiState, newUrl),
});
