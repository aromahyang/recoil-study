import { RecoilRoot } from 'recoil';
import Buttons from './components/Buttons';
import Movies from './components/Movies';

function App() {
	return (
		<RecoilRoot>
			<Buttons />
			<Movies />
		</RecoilRoot>
	);
}

export default App;
