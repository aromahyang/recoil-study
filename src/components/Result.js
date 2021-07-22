// 예제 2 - 고양이 사진 보여주기
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
