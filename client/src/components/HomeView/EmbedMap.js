import BingMapsReact from "bingmaps-react";
import { useMediaQuery } from '@mui/material';

const EmbedMap = () => {
  const matches = useMediaQuery('(min-width:900px)');

  return (
    <section id="embed-map">
      <BingMapsReact
        bingMapsKey={process.env.REACT_APP_BINGMAP_KEY}
        height={matches ? "500px" : "300px"}
        mapOptions={{
          navigationBarMode: "square",
        }}
        width="100%"
        viewOptions={{
          center: { latitude: -33.883320, longitude: 151.218384 },
          zoom: 17
        }}
        pushPins={[{ center: { latitude: -33.883320, longitude: 151.218384 }, options: { title: "Bat + Bun", color: '#3162ae' } }]}
      />
    </section>
  )
}

export default EmbedMap;
