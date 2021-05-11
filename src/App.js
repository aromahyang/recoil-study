// App.js
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';
import { CatProvider } from './context/CatContext';

function App() {
	return (
		<CatProvider>
			<TopPanel />
			<BottomPanel />
		</CatProvider>
	);
}

export default App;
