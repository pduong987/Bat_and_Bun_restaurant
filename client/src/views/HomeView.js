import { Container, Typography } from '@mui/material';
import HeroBanner from '../components/HomeView/HeroBanner';
import PartnerLinks from '../components/HomeView/PartnerLinks';

const HomeView = () => {
  const heroImageUrl = "./img/hero-image.jpg";

  return (
    <div id="HomeView">
      <HeroBanner imgUrl={heroImageUrl} />
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Homepage</Typography>
      </Container>
      <PartnerLinks />
    </div>
  )
}

export default HomeView;
