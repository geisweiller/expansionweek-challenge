import styled from 'styled-components';
import clouds from '../../../../assets/images/clouds.png';

export const Container = styled.div`

  height: 100vh;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-image: url(${clouds});

  background-size: 100%;

  width: 100%;
`;

export const TextContainer = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 50%;

  padding: 2rem;

  text-align: center;

  color: #F5F5F5;
 


  h1 {
    border: .2rem solid #FFF;
    padding: .4rem;
    box-shadow: .1rem .1rem .1rem #1588c7;
    background: rgba(65,169,220, 0.7);
    
    font-size: 3rem;

    margin: 1rem 0;
  }

  p {
   
    font-size: 1.4rem;
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

    margin: 1rem 0;

    :hover {
      background: #c5790e;
    }


  }

`;


export const ImageContainer = styled.div`


  .boat {
    
    width: 100%;
    height: 100%;
    
  }

`;