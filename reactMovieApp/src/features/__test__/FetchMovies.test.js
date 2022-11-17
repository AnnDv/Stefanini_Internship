/* eslint-disable max-len */
import React from 'react';
import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import FetchMovies from '../FetchMovies';

describe('FetchMovies', () => {
  it('should get movie data', async () => {
    const { getByTestId } = render(<FetchMovies />);
    await waitFor(async () => {
      const movieColl = getByTestId('fetch').children[1].children[0];
      const movieCollLength = movieColl.childElementCount;
      console.log(movieCollLength);
      expect(movieCollLength).toBeGreaterThan(1);
    });
  });

  it('should contain class name "card_description"', async () => {
    const { getByTestId } = render(<FetchMovies />);
    await waitFor(async () => {
      const movieColl = getByTestId('fetch').children[1].children[0];
      //  const movieCollLength = movieColl.childElementCount;
      // console.log(movieCollLength);
      const movieCollHaveClass = movieColl.getElementsByClassName('card_description');
      expect(movieCollHaveClass[0]).toHaveClass('card_description');
    });
  });
});
