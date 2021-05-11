// ./context/NumContext.js
import { createContext, useState } from 'react';

const NumContext = createContext({
	first: 0,
	second: 0,
	setFirst: () => {},
	setSecond: () => {},
});

function NumProvider({ children }) {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);

	const initialValue = {
		first,
		second,
		setFirst,
		setSecond,
	};

	return <NumContext.Provider value={initialValue}>{children}</NumContext.Provider>
}

export { NumContext, NumProvider };