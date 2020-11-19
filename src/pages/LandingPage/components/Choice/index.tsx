import React from 'react'
import { Container, Options, Option, ImageContainer } from './styles'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import mountain from '../../../../assets/images/mountain.png';

export default function Choice() {

  function scrollToLeadership() {
    const elmnt = document.getElementById('leadership');
    elmnt?.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <Container id='choice'>
      
      <h1>Qual caminho você prefere?</h1>
      <Options>
        <Option className='boss' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
          <ThumbDownIcon/>
          <h3>CHEFE</h3>
          <ul>
            <li>Manda</li>
            <li>Ameaça</li>
            <li>Atrapalha</li>
            <li>Fiscaliza</li>
            <li>Desmoraliza</li>
          </ul>
        </Option>
        <Option className='leader' onClick={scrollToLeadership}>
          <ThumbUpIcon/>
          <h3>LÍDER</h3>
          <ul>
            <li>Orienta</li>
            <li>Incentiva</li>
            <li>Ajuda</li>
            <li>Acompanha</li>
            <li>Confia</li>
          </ul>
        </Option>
      </Options>
      <ImageContainer>
        <img src={mountain} alt='mountain'></img>
      </ImageContainer>
      
    </Container>
    
  )
}
