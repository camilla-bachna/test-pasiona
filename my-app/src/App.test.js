import { render, screen } from '@testing-library/react';
import App from './components/App';

describe('check tags', () => {
  test('check if "Add task +"is a button', () => {
    //arrange
    render(<App />);
    //act
    const buttonElement = screen.getByText(/Add task/i);
    console.log(buttonElement.nodeName);
    const buttonTagName = buttonElement.nodeName;
    //assert
    expect(buttonTagName).toBe('BUTTON');
  });

  test('check label', () => {
    //arrange
    render(<App />);
    //act
    const labelElement = screen.getByText(/Task example/i);
    console.log(labelElement.nodeName);
    const labelTagName = labelElement.nodeName;
    //assert
    expect(labelTagName).toBe('LABEL');
  });
});
