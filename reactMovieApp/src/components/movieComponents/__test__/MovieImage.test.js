import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieImage from '../MovieImage';
import '@testing-library/jest-dom';
import CONFIG from '../../../config';

test('fetch images from api', () => {
  render(<MovieImage/>);
  const image = screen.getByRole('img');
  expect(image).toHaveAttribute('src', CONFIG.IMG_URL + image.poster_path);
  expect(image).toHaveAttribute('alt', 'movie');
});
