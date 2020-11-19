import React from 'react'
import Choice from './components/Choice'
import Home from './components/Home'
import Leadership from './components/Leadership'
import useScrollPosition from "@react-hook/window-scroll";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { Container } from './styles';

export default function LandingPage() {
  const scrollY = useScrollPosition(60);
  
  console.log(scrollY);

  return (
    <Container>
      <Home/>
      <Choice/>
      <Leadership/>
      {scrollY > 200 && 
      (<button 
        className='scrollup' 
        type='button' 
        onClick={() => window.scrollTo({top: 0, left: 0, behavior:'smooth'})}><ExpandLessIcon/></button>)}
    </Container>
  )
}
