import { render, screen } from '@testing-library/react';
import Tasks from './Tasks';

describe('check tags', () => {
  test('check if "Add task +"is a button', () => {
    //arrange
    render(<Tasks />);
    //act
    const buttonElement = screen.getByText(/Add task/i);
    console.log(buttonElement.nodeName);
    const buttonTagName = buttonElement.nodeName;
    //assert
    expect(buttonTagName).toBe('BUTTON');
  });

  test('check label', () => {
    //arrange
    render(<Tasks />);
    //act
    const labelElement = screen.getByText(/Task example/i);
    console.log(labelElement.nodeName);
    const buttonTagName = labelElement.nodeName;
    //assert
    expect(buttonTagName).toBe('LABEL');
  });
});
