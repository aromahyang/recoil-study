// App.js
import { useState } from 'react';
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';
import { CatContext } from './context/CatContext';

function App() {
	const [url, setUrl] = useState('');

	const initialValue = {
		url,
		setUrl,
	};

	return (
		<CatContext.Provider value={initialValue}>
			<TopPanel />
			<BottomPanel />
		</CatContext.Provider>
	);
}

export default App;
