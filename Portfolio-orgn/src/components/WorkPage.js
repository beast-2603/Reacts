import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { DarkTheme } from './Themes';
import { motion } from 'framer-motion';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import { Work } from '../data/WorkData';
import Cards from '../subComponents/Cards';
import { YinYang } from './AllSvgs';
import BigTittle from '../subComponents/BigTittle';

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 250vh;
  position: relative;
  overflow: hidden;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 10rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const container = {
  hidden: {
    opacity: 0,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5
    }
  }
};

const WorkPage = () => {
  const ref = useRef(null);
  const yingyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yingyang.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };

    window.addEventListener('scroll', rotate);

    return () => window.removeEventListener('scroll', rotate);
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />

        <Main
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
          exit={{
            opacity: 0,
            transition: { duration: 0.5 }
          }}
        >
          {Work.map((d) => (
            <Cards key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yingyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTittle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
