import { motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import music from '../assets/audio/Electro-Light-symbolism-mp3-song.mp3';

const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 8rem;
  top: 3rem;
  z-index: 10;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(.75)
}
50%{
    transform:scaleY(1.5)
}
100%{
    transform:scaleY(.75)
}
`;

const Line = styled(motion.span)`
  background: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};

  animation: ${play} 1s ease infinite;
  animation-play-state: ${(props) => (props.click ? 'running' : 'paused')};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

const SoundBar = () => {
  const ref = useRef(null);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);

    if (!click) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  };

  return (
    <Box onClick={() => handleClick()}>
      <Line
        click={click}
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
      />
      <Line
        click={click}
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
      />
      <Line
        click={click}
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
      />
      <Line
        click={click}
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
      />
      <Line
        click={click}
        initial={{
          opacity: 0,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
        animate={{
          opacity: 1,
          transition: { type: 'spring', duration: 1.5, delay: 1 }
        }}
      />

      <audio src={music} ref={ref} loop />
    </Box>
  );
};

export default SoundBar;
