import React from 'react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import FetchMovies from '../FetchMovies.jsx';
import moviesObject from '../__fixtures__/moviesObject';
import renderWithProviders from '../../../common/customRender.jsx';

describe('FetchMovies', () => {
  it('should render movies after the page was loaded', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(moviesObject));

    const { getByTestId } = renderWithProviders(<FetchMovies/>);

    await waitFor(() => {
      expect(getByTestId('668461')).toBeInTheDocument();
    });
  });

  it('should not render movies after the page was loaded with bad (empty) response', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    const { getByTestId } = renderWithProviders(<FetchMovies/>);

    await waitFor(() => {
      expect(() => getByTestId('668461')).toThrow();
    });
  });

  it('should not render movies with incorrect id', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(moviesObject));

    const { getByTestId } = renderWithProviders(<FetchMovies/>);

    await waitFor(() => {
      expect(() => getByTestId('66841')).toThrow();
    });
  });
});
