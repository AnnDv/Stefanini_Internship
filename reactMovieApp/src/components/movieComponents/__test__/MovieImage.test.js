import React from 'react';
import { render } from '@testing-library/react';
import MovieImage from '../MovieImage';
import '@testing-library/jest-dom';
import CONFIG from '../../../config';

describe('Image component', () => {
  test('get images from api', () => {
    const { getByRole } = render(<MovieImage/>);
    const image = getByRole('img');
    expect(image).toHaveAttribute('src', CONFIG.IMG_URL + image.poster_path);
    expect(image).toHaveAttribute('alt', 'movie');
  });
});
