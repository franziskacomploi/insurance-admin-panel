import Input from './Input';
import {render, screen} from '@testing-library/react';

describe('Input Component', () => {

test('initialValue is rendered correctly', () => {
  render(<Input onSubmit={() => {}} isEditable={false} initialValue={'hello'} />)
  screen.getByText('hello')
})

test('initialValue is rendered as <p> if isEditable is false', () => {
  render(<Input onSubmit={() => {}} isEditable={false} initialValue={'hello'} />)
  screen.getByTestId('text-input')
})

test('initialValue is rendered as <input> if isEditable is true', () => {
  render(<Input onSubmit={() => {}} isEditable={true} initialValue={'hello'} />)
  screen.getByTestId('editable-input')
})

})