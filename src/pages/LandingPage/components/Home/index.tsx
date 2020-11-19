import React from 'react';
import boat from '../../../../assets/images/boat.png';
import { Container, ImageContainer, TextContainer } from './styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default function Home() {

  function scrollToNext() {
    const elmnt = document.getElementById('choice');
    elmnt?.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <Container>
      <TextContainer>
        <h1>LIDERANÇA</h1>
        <p>Não estamos aqui para mandar em você. Estamos aqui para te guiar em seu caminho.</p>
        <button onClick={scrollToNext}>Inicie seu caminho<NavigateNextIcon/></button>
      </TextContainer>
      <ImageContainer>
        <img className='boat' src={boat} alt='leadership'></img>
      </ImageContainer>
    </Container>
  )
}
