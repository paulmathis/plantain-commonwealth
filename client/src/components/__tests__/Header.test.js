import 'jest-styled-components';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header';
import { sizes } from '../../util/mediaQueries';

test('<Header /> applies styles after hambuger menu clicked', () => {
  const { container } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const nav = container.querySelector('nav');

  expect(nav).toHaveStyleRule('max-height', '0', {
    media: `(max-width:${sizes.desktop}px)`,
  });

  fireEvent.click(container.querySelector('button'));

  expect(nav).toHaveStyleRule('max-height', '500px', {
    media: `(max-width:${sizes.desktop}px)`,
  });
});
