import React from 'react'
import { Container } from './styles';
import avatar from '../../../../assets/images/avatar.png'
import { TextContainer } from './styles';
import ReactPlayer from "react-player"

export default function Leadership() {
  return (
    <Container id='leadership'>

      <h1>Caminho da liderança</h1>
      <img className='avatar' src={avatar} alt='Pedro'/>
      <TextContainer>
        <label>Capitão Steve Rogers</label>
        <label>Cliente da Liderança e Líder dos Vingadores</label>
        <p>
        "Um líder de sucesso é aquele que conhece seus colaboradores, confia em suas capacidades, sabe delegar e dar os feedbacks necessários à evolução, aperfeiçoamento e crescimento da equipe.
        Liderar pessoas é a nobre missão de conduzi-las e orientá-las para que o grupo possa alcançar seus objetivos."
        </p>
        <strong>Veja abaixo o Capitão Steve Rogers utilizar o nosso produto em um dos seus projetos:</strong>
        <ReactPlayer url='https://www.youtube.com/watch?v=XB1oYiQlfr8' width='50vh' height='50vh' />
        <button>Seja um líder!</button>
      </TextContainer>
      
    </Container>
  )
}
