import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import Buttons from './components/Buttons';
import Movies from './components/Movies';

function App() {
	return (
		<RecoilRoot>
			<Buttons />
			<Suspense fallback={<div />}>
				<Movies />
			</Suspense>
		</RecoilRoot>
	);
}

export default App;
