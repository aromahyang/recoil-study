// ./components/CatImage.js
import { useContext } from 'react';
import { CatContext } from '../context/CatContext';

export default function CatImage() {
	const { url } = useContext(CatContext);
	return <img src={url} width={300} alt="고양이 사진" />;
}
