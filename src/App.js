import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<Parent1 count={count}>
			<Parent2 count={count}>
				<Parent3 count={count}>
					<Parent4 count={count}>
						<Child count={count} />
					</Parent4>
				</Parent3>
			</Parent2>
		</Parent1>
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