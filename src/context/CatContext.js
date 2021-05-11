// ./context/CatContext.js
import { createContext, useState } from 'react';

const CatContext = createContext({
	url: '',
	setUrl: () => {},
});

function CatProvider({ children }) {
	const [url, setUrl] = useState('');

	const initialValue = { url, setUrl };

	return <CatContext.Provider value={initialValue}>{children}</CatContext.Provider>
}

export { CatContext, CatProvider };
