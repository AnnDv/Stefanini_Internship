import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import FetchMovies from '../FetchMovies.jsx';
import store from '../../store/store';

describe('FetchMovies', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should add movie data', async () => {
    fetchMock.mockResolvedValue([{
      title: 'Black', overview: 'text',
    }]);

    const { getByTestId, baseElement } = render(
      <Provider store={store}>
        <FetchMovies/>
      </Provider>,
    );

    await waitFor(async () => {
      const movieColl = getByTestId('fetch').children[0];
      const movieCollLength = movieColl.childElementCount;
      expect(movieCollLength).toBeGreaterThanOrEqual(1);
    });
    expect(baseElement).toMatchSnapshot();
  });
});
