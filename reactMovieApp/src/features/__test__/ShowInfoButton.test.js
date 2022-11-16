import {
  cleanup, render, screen,
} from '@testing-library/react';
import React from 'react';
import ShowInfoButton from '../ShowInfoButton';
import '@testing-library/jest-dom';

afterEach(() => {
  cleanup();
});

describe('Button component', () => {
  const onClick = jest.fn();
  render(<ShowInfoButton onClick={onClick} btnTxt="View More"/>);
  const button = screen.getByRole('button');

  test('Button rendering', () => {
    expect(button).toBeInTheDocument();
  });

  test('Button text', () => {
    expect(button).toHaveTextContent('View More');
  });
});
