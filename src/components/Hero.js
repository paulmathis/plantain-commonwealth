import styled from 'styled-components/macro';
import hero from '../assets/hero.jpg';

export default styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url(${hero});
  background-size: cover;
  height: 570px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 60px;

  h1 {
    font-size: 4em;
    margin-top: 0;
  }

  h2 {
    font-weight: 400;
  }
`;
