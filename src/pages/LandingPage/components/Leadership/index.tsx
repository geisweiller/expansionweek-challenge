import React from 'react'
import { Container } from './styles';
import avatar from '../../../../assets/images/avatar.png'
import { TextContainer } from './styles';

export default function Leadership() {
  return (
    <Container id='leadership'>

      <h1>Caminho da liderança</h1>
      <img className='avatar' src={avatar} alt='Pedro'/>
      <TextContainer>
        <label>Willem Dafoe</label>
        <label>Líder Nato</label>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu pharetra lacus.
          Nulla volutpat eros nec egestas dapibus. Nunc sagittis tempus nunc, non auctor arcu dignissim nec.
        </p>

        <button>Vamos lá?</button>
      </TextContainer>
      
    </Container>
  )
}
