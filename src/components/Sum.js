// ./components/Sum.js
import { useContext } from 'react';
import { NumContext } from '../context/NumContext';

export default function Sum() {
	const { setFirst, setSecond } = useContext(NumContext);

	const handleChange = (event, index) => {
		const value = parseInt(event.target.value, 10);

		if (isNaN(value)) {
			if (index === 1) {
				setFirst(0);
			} else if (index === 2) {
				setSecond(0);
			}
		} else {
			if (index === 1) {
				setFirst(value);
			} else if (index === 2) {
				setSecond(value);
			}
		}
	};

	return (
		<div>
			<input type="number" onChange={(e) => handleChange(e, 1)} />
			+
			<input type="number" onChange={(e) => handleChange(e, 2)} />
		</div>
	);
}
