// ./components/Result.js
import { useContext } from 'react';
import { NumContext } from '../context/NumContext';

export default function Result() {
	const { first, second } = useContext(NumContext);
	return (
		<div>
			Result: {first + second}
		</div>
	);
}
