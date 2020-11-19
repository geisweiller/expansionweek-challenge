import styled from 'styled-components';
import clouds from '../../../../assets/images/clouds.png';

export const Container = styled.div`

  position: relative;

  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
  
  align-items: center;

  background-image: url(${clouds});

  background-size: 100%;

  color: #F5F5F5;
  
  h1 {
    margin: 1rem 0;
  }

  img.avatar {
    width: 10rem;
    border-radius: 50%;

    margin-bottom: 1rem;
  }

  
`;

export const TextContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75%;

  @media(min-width:1100px) {
    width: 50%;
  }

  text-align: center;

  label, p, strong, button {
    margin-bottom: 2rem;
  }

  label {

    font-weight: bold;
    font-size: 1.4rem;
  }

  p {
    font-size: 1em;
    font-style: italic;

    border: .1rem solid #FFF;
    padding: 1rem;

    background: rgba(65,169,220, 0.7);
  }
  

  button {

    display: flex;
    align-items: center;

    border: .1rem solid #FFF;
    border-radius: 1rem;
    outline: none;

    background: #ef971b;
    box-shadow: .1rem .1rem .1rem #1588c7;

    font-size: 1.4rem;
    font-weight: bold;
    color: #FFF;

    padding: 1rem;
    margin-top: 2rem;

    :hover {
      background: #c5790e;
    }
  }
`;

