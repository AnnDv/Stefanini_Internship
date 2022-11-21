/* eslint-disable max-len */
import {
  cleanup, render,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import React from 'react';
import ShowInfoButton from '../ShowInfoButton';

jest.mock('../../../api/getData');

describe('Button component', () => {
  afterEach(() => {
    cleanup();
  });

  it('should render a button and have a name', () => {
    const mockOnClick = jest.fn();
    const { getByRole, baseElement } = render(<ShowInfoButton onClick={mockOnClick} btnTxt="View More"/>);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('View More');
    expect(baseElement).toMatchSnapshot();
  });
});
