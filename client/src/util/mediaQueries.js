import { css } from 'styled-components/macro';

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export function desktop(input) {
  return css`
    @media (max-width: 992px) {
      ${input};
    }
  `;
}

export function tablet(input) {
  return css`
    @media (max-width: 768px) {
      ${input};
    }
  `;
}

export function phone(input) {
  return css`
    @media (max-width: 576px) {
      ${input};
    }
  `;
}

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${args};
    }
  `;

  return acc;
}, {});
