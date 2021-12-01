import { Container, Typography } from '@mui/material';
import PartnerLinks from '../components/PartnerLinks';

const HomeView = () => {
  return (
    <div id="HomeView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Homepage</Typography>
      </Container>
      <PartnerLinks />
    </div>
  )
}

export default HomeView;
