// 예제 3 - 영화 목록 보여주기
import { useRecoilState } from 'recoil';
import { typeStatus } from '../recoil/movieStatus';
import './styles.css';

export default function Buttons() {
	const [type, setType] = useRecoilState(typeStatus);
	return ['now_playing', 'popular', 'upcoming'].map((item) =>
		<button className={`type-button${item !== type ? '' : ' active'}`} onClick={() => setType(item)}>
			{item}
		</button>
	);
}
