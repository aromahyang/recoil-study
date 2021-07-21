import { RecoilRoot } from 'recoil';
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';

function App() {
	return (
		<RecoilRoot>
			<TopPanel />
			<BottomPanel />
		</RecoilRoot>
	);
}

export default App;
