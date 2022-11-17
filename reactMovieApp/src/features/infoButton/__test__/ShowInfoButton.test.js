import {
  cleanup, render,
} from '@testing-library/react';
import React from 'react';
import ShowInfoButton from '../ShowInfoButton';
import '@testing-library/jest-dom';

describe('Button component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a button and have a name', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<ShowInfoButton onClick={onClick} btnTxt="View More"/>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('View More');
  });
});
