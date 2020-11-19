import styled from 'styled-components';
import clouds from '../../../../assets/images/clouds.png';

export const Container = styled.div`

  position: relative;

  height: 100vh;
  width: 100%;
  display: flex; 
  flex-direction: column;
  
  align-items: center;
  background-image: url(${clouds});

  background-size: 100%;

  color: #FFF;

  h1 {
    margin: 1rem 0;
    grid-area: title;
    text-align: center;
  }

 
  
`;

export const Options = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;

  padding: 2rem;
  

  .boss {

    background: #b55175;

    :hover {
      background: red;
    }
  }

  .leader {
    background: #4cc388;

    :hover {
      background: green;
    }
  }
`;

export const Option = styled.button`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  text-align: center;
  color: #F5F5F5;
  font-size: 1rem;

  outline: none;
  border: .1rem solid #FFF;
  border-radius: 1rem;
  width: 45%;


  @media(min-width: 1100px) {
    width: 25%;
    font-size: 1.4rem;
  }

  padding: .5rem;
  margin: 0 .5rem;
  
  

  h3 {
    margin: 1rem 0;
    font-weight: bold;
  }

  ul {
    list-style-type: none;
    margin-bottom: 1rem;
  }


`;


export const ImageContainer = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  

  position: absolute;
  bottom: 0;


  img {

    width: 70%;

  }

`;