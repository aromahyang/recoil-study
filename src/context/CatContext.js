// ./context/CatContext.js
import { createContext } from 'react';

export const CatContext = createContext({
	url: '',
	setUrl: () => {},
});
