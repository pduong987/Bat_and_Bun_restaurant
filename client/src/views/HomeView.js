import HeroBanner from '../components/HomeView/HeroBanner';
import MenuItemList from '../components/HomeView/MenuItemList';
import PartnerLinks from '../components/HomeView/PartnerLinks';
import EmbedMap from '../components/HomeView/EmbedMap';
import BusinessInfo from '../components/HomeView/BusinessInfo';

const HomeView = () => {
  const heroImageUrl = "./img/hero-image.jpg";

  return (
    <div id="HomeView">
      <HeroBanner imgUrl={heroImageUrl} />
      <MenuItemList />
      <PartnerLinks />
      <EmbedMap />
      <BusinessInfo />
    </div>
  )
}

export default HomeView;
