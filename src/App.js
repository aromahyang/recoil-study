// App.js
import { useState } from 'react';
import TopPanel from './components/TopPanel';
import BottomPanel from './components/BottomPanel';
import { NumContext } from './context/NumContext';

function App() {
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);

	const initialValue = {
		first,
		second,
		setFirst,
		setSecond,
	};

	return (
		<NumContext.Provider value={initialValue}>
			<TopPanel />
			<BottomPanel />
		</NumContext.Provider>
	);
}

export default App;

/*
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const textState = atom({
	key: 'textState',
	default: ''
});

function TextInput() {
	const [text, setText] = useRecoilState(textState);

	const onChange = (event) => {
		setText(event.target.value);
	};

	return (
		<div>
			<input type="text" value={text} onChange={onChange} />
			<br/>
			Echo: {text}
		</div>
	);
}

const charCountState = selector({
	key: 'charCountState',
	get: ({ get }) => {
		const text = get(textState);
		return text.length;
	},
});

function CharacterCount() {
	const count = useRecoilValue(charCountState);
	return <>Character Count: {count}</>;
}

function CharacterCounter() {
	return (
		<div>
			<TextInput />
			<CharacterCount />
		</div>
	);
}

function App() {
	return (
		<RecoilRoot>
			<CharacterCounter />
		</RecoilRoot>
	);
}

export default App;
*/