import { useRecoilValue } from 'recoil';
import { numberState } from '../recoil/numberState';

export default function Result() {
	const { first, second } = useRecoilValue(numberState);

	return (
		<div>
			Result: {first + second }
		</div>
	);
}
