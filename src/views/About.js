import {Typography} from '@mui/material';
import {motion} from 'framer-motion';
import React from 'react';

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 200}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <Typography component="h1" variant="h2">
        Tervetuloa OnlyStudentsiin Palvelun ideana on tavoittaa kaikki
        opiskelijat, jotka turhautuvat tiedonhausta eri sovelluksista, ja tuoda
        tapahtuma-, ja olennaistietoa suoraan yhteen paikkaan.
      </Typography>
    </motion.div>
  );
};
export default About;
