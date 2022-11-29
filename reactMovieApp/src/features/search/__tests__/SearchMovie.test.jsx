import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import SearchBox from '../SearchMovie.jsx';
import store from '../../../store/store';

describe('SearchBox', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  const correctInput = 'star';

  it('should find a movie', () => {
    const mockOnChange = jest.fn();
    const { getByTestId, baseElement } = render(
        <Provider store={store}>
          <SearchBox setSearch={mockOnChange}/>
        </Provider>,
    );

    const input = getByTestId('search');

    fireEvent.change(input, { target: { value: 'star' } });

    expect(mockOnChange).toBeCalledWith(correctInput);
    expect(baseElement).toMatchSnapshot();
  });
});
