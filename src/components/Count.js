import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import './Count.css';

const countState = atom({
	key: 'countState',
	default: 0,
});

const squareState = selector({
	key: 'squareState',
	get: ({ get }) => {
		const count = get(countState);
		return count * count;
	},
});

function Count() {
	const [count, setCount] = useRecoilState(countState);
	const square = useRecoilValue(squareState);

	return (
		<div>
			<span>current: {count}</span>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<p>square: {square}</p>
		</div>
	);
}

export default Count;
