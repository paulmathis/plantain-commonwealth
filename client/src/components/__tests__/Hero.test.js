import 'jest-styled-components';
import React from 'react';
import { render } from 'react-testing-library';
import Hero from '../Hero';

const src = '/somepic.jpg';

test('<Hero />', () => {
  const { container } = render(<Hero src={src} />);
  expect(container.firstChild).toMatchSnapshot();
});

test('<Hero /> small', () => {
  const { container } = render(<Hero src={src} small />);
  expect(container.firstChild).toMatchSnapshot();
});

test('<Hero /> xsmall', () => {
  const { container } = render(<Hero src={src} xsmall />);
  expect(container.firstChild).toMatchSnapshot();
});
