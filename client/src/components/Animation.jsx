import animationData from '../assets/animation_todo.json';
import Lottie from 'lottie-react';
import { useRef } from 'react';

function Animation() {

  return (
    <>
      <Lottie animationData={animationData}/>
    </>
  );
}

export default Animation;