// 예제 2 - 고양이 사진 보여주기
import { useRecoilValue } from 'recoil';
import { catStatus } from '../recoil/catStatus';

export default function CatImage() {
	const url = useRecoilValue(catStatus);
	return <img src={url} width={300} alt="고양이 사진"/>;
}
