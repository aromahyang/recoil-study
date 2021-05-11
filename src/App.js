// App.js
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';
import { NumProvider } from './context/NumContext';

function App() {
	return (
		<NumProvider>
			<TopPanel />
			<BottomPanel />
		</NumProvider>
	);
}

export default App;
