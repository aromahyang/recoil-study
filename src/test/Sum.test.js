import { fireEvent, render } from '@testing-library/react';
import Sum from '../components/Sum';

describe('<Sum />', () => {
	it('change 1st input', () => {
		const { getByLabelText } = render(<Sum />);
		const input1 = getByLabelText('1st');
		fireEvent.change(input1, { target: { value: '1' } });
		expect(input1.value).toBe('1');
	});

	it('change 2nd input', () => {
		const { getByLabelText } = render(<Sum />);
		const input2 = getByLabelText('2nd');
		fireEvent.change(input2, { target: { value: '12' } });
		expect(input2.value).toBe('12');
	})
});