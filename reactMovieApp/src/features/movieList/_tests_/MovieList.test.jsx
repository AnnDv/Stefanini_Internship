import React from 'react';
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import movies from '../_fixtures_/movies';
import MovieList from '../MovieList.jsx';

describe('MovieList', () => {
  const { getByTestId, baseElement } = render(<MovieList movies={movies}/>);
  it('should match the snapshot', async () => {
    await waitFor(async () => {
      const movieColl = getByTestId('list').children[0];
      console.log('teststst  ', movieColl);
      const movieCollLength = movieColl;
      expect(movieCollLength).toBeGreaterThan(0);
    });
    expect(baseElement).toMatchSnapshot();
  });
});
