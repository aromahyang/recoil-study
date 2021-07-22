// 예제 2 - 고양이 사진 보여주기
import { useSetRecoilState } from 'recoil';
import { catStatus } from '../recoil/catStatus';

export default function Button() {
	const setUrl = useSetRecoilState(catStatus);

	const handleClick = async () => {
		const res = await fetch('https://api.thecatapi.com/v1/images/search', { method: 'GET' });
		const result = await res.json();
		setUrl(result[0].url);
	};

	return <button onClick={() => handleClick()}>고양이 사진 가져오기</button>;
}
