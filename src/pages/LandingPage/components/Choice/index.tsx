import React from 'react'
import { Container, Options, Option, ImageContainer } from './styles'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import leader from '../../../../assets/images/leader.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


export default function Choice() {

  toast.configure();

  function scrollToLeadership() {
    const elmnt = document.getElementById('leadership');
    elmnt?.scrollIntoView({ behavior: 'smooth' });
  }

  function tryItAgain() {
    window.scrollTo({ top: 0, behavior: 'smooth'})

    toast.error('Sério? Que tal tentarmos de novo?' , {
      autoClose: 2000
    })
  }

  return (
    <Container id='choice'>
      
      <h1>Qual caminho você prefere?</h1>
      <Options>
        <Option className='boss' onClick={tryItAgain}>
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
        <img src={leader} alt='mountain'></img>
      </ImageContainer>
      
    </Container>
    
  )
}
