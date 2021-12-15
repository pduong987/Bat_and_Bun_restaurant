import React from 'react';
import { Container, Typography, Grid } from "@mui/material";
import IconLink from './IconLink';

const PartnerLinks = () => {
  // Delivery partner links
  const partnerApps = [
    {
      linkName: "YQme",
      linkUrl: "https://batandbun.yqme.com.au/",
      linkIcon: "./img/yqme-icon.png"
    },
    {
      linkName: "Uber Eats",
      linkUrl: "https://www.ubereats.com/au/store/bat-and-bun/8Z7Y1UXfTRGUIgPV-6CZPQ",
      linkIcon: "./img/uber-eats-icon.png"
    },
    {
      linkName: "Menulog",
      linkUrl: "https://www.menulog.com.au/restaurants-bat-and-bun-vietnamese-kitchen/menu",
      linkIcon: "./img/menulog-icon.png"
    },
    {
      linkName: "DoorDash",
      linkUrl: "https://www.doordash.com/store/bat-and-bun-darlinghurst-1741578/?utm_campaign=gpa",
      linkIcon: "./img/doordash-icon.png"
    }
  ];

  // Social Media links
  const socmedApps = [
    {
      linkName: "Facebook",
      linkUrl: "https://www.facebook.com/batandbun/",
      linkIcon: "./img/fb-icon.png"
    },
    {
      linkName: "Instagram",
      linkUrl: "https://www.instagram.com/batandbun/?hl=en",
      linkIcon: "./img/insta-icon.png"
    }
  ];

  return (
    <section id="partner-links">
      <Container>
        <div>
          <Typography component="h3">
            Our Partners
          </Typography>
          <Grid container spacing={2} className="icon-links">
            {partnerApps.map((link, i) => (
              <Grid item xs={3} md={3} lg={3} key={i}>
                <IconLink linkName={link.linkName} linkUrl={link.linkUrl} linkIcon={link.linkIcon} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div>
          <Typography component="h3">
            Connect with Us
          </Typography>
          <Grid container spacing={5} className="icon-links">
            {socmedApps.map((link, i) => (
              <Grid item xs={6} md={6} lg={6} key={i}>
                <IconLink linkName={link.linkName} linkUrl={link.linkUrl} linkIcon={link.linkIcon} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </section>
  )
}

export default PartnerLinks;
