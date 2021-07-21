import { atom, useRecoilState } from 'recoil';
import './Count.css';

const countState = atom({
	key: 'countState',
	default: 0,
});

function Count() {
	const [count, setCount] = useRecoilState(countState);

	return (
		<div>
			<span>current: {count}</span>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
		</div>
	);
}

export default Count;
