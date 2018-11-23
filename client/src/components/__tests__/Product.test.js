import React from 'react';
import { render } from 'react-testing-library';
import { MemoryRouter } from 'react-router-dom';
import Product from '../Product';

const product = {
  name: 'Green T-Shirt',
  price: 19.99,
  image: '/assets/products/men/t-shirts/green-t-shirt.jpg',
};

test('<Product /> renders props correctly', () => {
  const { container } = render(
    <MemoryRouter>
      <Product product={product} />
    </MemoryRouter>
  );

  const imageSource = container.querySelector('img').getAttribute('src');
  expect(imageSource).toBe(product.image);

  const linkText = container.querySelector('a').textContent;
  expect(linkText).toBe(product.name);

  const price = container.querySelector('p').textContent;
  expect(price).toBe(`$${product.price}`);
});
