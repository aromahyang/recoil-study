// 예제 1 - 두 숫자의 합 구하기
import { useSetRecoilState } from 'recoil';
import { numberState } from '../recoil/numberState'

export default function Inputs() {
	const setNumber = useSetRecoilState(numberState);

	/**
	 * @param {number} val 
	 */
	const setFirstNumber = (val) => {
		setNumber((prev) => ({ ...prev, first: val }));
	};

	/**
	 * @param {number} val 
	 */
	const setSecondNumber = (val) => {
		setNumber((prev) => ({ ...prev, second: val }));
	};

	return (
		<div>
			<input
				type="number"
				onChange={(e) => setFirstNumber(+e.target.value)}
			/>
			+
			<input
				type="number"
				onChange={(e) => setSecondNumber(+e.target.value)}
			/>
		</div>
	)
}
