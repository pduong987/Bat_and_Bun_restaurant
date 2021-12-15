import React from 'react';
import { Container, Typography } from '@mui/material';

const BusinessInfo = () => {
  // Business info
  const businessInfo = [
    {
      type: "Location",
      content: ["379B South Dowling St,", "Darlinghurst NSW 2010"]
    },
    {
      type: "Contact",
      content: ["0452 453 686"]
    },
    {
      type: "Hours",
      content: ["Mon-Fri 9:30am-3:45pm", "Sat-Sun 10:00am-3:30pm"]
    }
  ];

  return (
    <section id="business-info" data-testid="business-info">
      <Container>
        {businessInfo.map((info, i) => (
          <div key={i}>
            <Typography variant="h3" sx={{fontSize: "1.2em", fontWeight: "700"}}>{info.type}</Typography>
            <ul>
              {info.content.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
    </section>
  )
}

export default BusinessInfo;
