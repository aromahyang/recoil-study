import { atom } from 'recoil';

export const numberState = atom({
	key: 'numberState',
	default: {
		first: 0,
		second: 0,
	},
});
