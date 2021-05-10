// ./context/NumContext.js
import { createContext } from 'react';

export const NumContext = createContext({
	first: 0,
	second: 0,
	setFirst: () => {},
	setSecond: () => {},
});
