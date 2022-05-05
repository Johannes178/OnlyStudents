import {Typography, Grid} from '@mui/material';
import BackButton from './../components/BackButton';

const About = () => {
  return (
    <>
      <BackButton />
      <Grid
        container
        className="about"
        style={{
          fontSize: '1rem',
          textAlign: 'center',
          marginRight: 'auto',
          width: '50%',
          marginLeft: 'auto',
        }}
      >
        <Grid
          item
          xs={12}
          className="about aboutShadow"
          margin={0}
          style={{
            marginTop: '30vh',
            backgroundColor: '#ff5c00',
            padding: '50px',
            border: '4px solid black',
          }}
        >
          <Typography margin={'10px'}>Tervetuloa OnlyStudentsiin </Typography>{' '}
          <Typography>
            {' '}
            Palvelun ideana on tavoittaa kaikki opiskelijat, jotka turhautuvat
            tiedonhausta eri sovelluksista, ja tuoda tapahtuma-, ja
            olennaistietoa suoraan yhteen paikkaan.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
