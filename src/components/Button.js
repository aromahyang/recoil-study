// ./components/Button.js
import { useContext } from 'react';
import { CatContext } from '../context/CatContext';

export default function Button() {
	const { setUrl } = useContext(CatContext);

	const handleClick = async () => {
		const res = await fetch('https://api.thecatapi.com/v1/images/search', { method: 'GET' });
		const result = await res.json();
		setUrl(result[0].url);
	};

	return <button onClick={() => handleClick()}>고양이 사진 가져오기</button>;
}
