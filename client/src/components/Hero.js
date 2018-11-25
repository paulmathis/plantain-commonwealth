import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { desktop } from '../util/mediaQueries';

const Hero = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${props => props.src});
  background-size: cover;
  background-position: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 60px;
  height: ${props => (props.small ? '300px' : '570px')};
  height: ${props => (props.xsmall ? '150px' : '570px')};

  h1 {
    text-align: center;
    font-size: 4em;
    margin: 0;
  }

  h2 {
    font-weight: 400;
  }

  button {
    margin-top: 42px;
  }

  ${desktop(css`
    height: ${props => props.small && '300px'};
  `)};
`;

Hero.propTypes = {
  src: PropTypes.string,
  small: PropTypes.bool,
  xsmall: PropTypes.bool,
};

export default Hero;
