import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchMovies from '../FetchMovies';
import mockData from '../../api/getData';

jest.mock('../../api/getData');

describe('FetchMovies', () => {
  it('should add movie data', async () => {
    mockData.mockResolvedValue([{
      title: 'Black', overview: 'text',
    }]);
    const { getByTestId, baseElement } = render(<FetchMovies />);
    await waitFor(async () => {
      const movieColl = getByTestId('fetch').children[0].children[0];
      const movieCollLength = movieColl.childElementCount;
      expect(movieCollLength).toBeGreaterThanOrEqual(1);
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('should fail if we have an empty array', async () => {
    console.log(mockData);
    mockData.mockResolvedValue([]);
    const { getByTestId, baseElement } = render(<FetchMovies />);
    await waitFor(async () => {
      const movieColl = getByTestId('fetch').children[1].children[0];
      const movieCollLength = movieColl.childElementCount;
      expect(movieCollLength).toBeGreaterThan(0);
    });
    expect(baseElement).toMatchSnapshot();
  });
});
