import React from 'react';
import {
  fireEvent, waitFor, screen, render,
} from '@testing-library/react';
import { act } from 'react-test-renderer';
import SearchBox from '../SearchMovie.jsx';

describe('SearchBox', () => {
  const correctInput = 'star';

  it('should find a movie', () => {
    const mockOnChange = jest.fn();
    act(() => {
      render(<SearchBox setSearch={mockOnChange}/>);
    });

    const input = screen.getByTestId('search');
    const btn = screen.getByTestId('btn');

    act(() => {
      fireEvent.change(input, { target: { value: correctInput } });
    });
    act(() => {
      fireEvent.click(btn);
    });

    waitFor(() => {
      expect(mockOnChange).toBeCalledWith(correctInput);
    });
  });

  it('should not work with empty', () => {
    const mockOnChange = jest.fn();
    act(() => {
      render(<SearchBox setSearch={mockOnChange}/>);
    });

    const input = screen.getByTestId('search');
    const btn = screen.getByTestId('btn');

    act(() => {
      fireEvent.change(input, { target: { value: '' } });
    });
    screen.debug();
    act(() => {
      fireEvent.click(btn);
    });

    waitFor(() => {
      expect(mockOnChange).toHaveBeenCalledTimes(0);
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });
  });
});
