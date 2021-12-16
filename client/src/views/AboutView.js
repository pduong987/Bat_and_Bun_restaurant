import React from 'react';
import { Container, Typography } from '@mui/material';
import HeroBanner from '../components/HomeView/HeroBanner';

const AboutView = () => {
  const heroImageUrl = "./img/about-hero-image.jpg";

  return (
    <div data-testid="about-view" id="AboutView">
      <HeroBanner imgUrl={heroImageUrl} />
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Bat + Bun</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis volutpat neque. Morbi ultricies leo at elit congue, sit amet bibendum metus molestie. Etiam ornare quis sapien vel efficitur. Nullam quis nunc semper, facilisis metus eu, congue magna. Praesent congue quis odio et luctus. Donec a est vitae erat elementum dictum. Sed pretium placerat enim ut sodales. Vestibulum dictum mauris a semper tempus. Morbi ac arcu ex. Morbi facilisis urna at pharetra iaculis. Duis in quam eu erat malesuada eleifend vitae feugiat libero. Nam consectetur risus ut sapien lacinia maximus. In malesuada mi at dui posuere, et varius turpis eleifend. Phasellus quis nunc eu nulla rutrum accumsan eget non nisl.
        </p>
        <div className="about-owner">
          <p className="about-img">
            <img src="./img/owner.jpg" alt="Bat + Bun owner" />
          </p>
          <p>
            Donec nunc nulla, molestie rutrum neque congue, porta dictum turpis. Etiam quis laoreet ligula. In ut nisl in enim dapibus commodo. Curabitur viverra eleifend dui, at ultricies leo fermentum euismod. Maecenas volutpat ex a enim sagittis pretium. Maecenas nulla massa, iaculis eu imperdiet a, ultrices eget tellus. Etiam ipsum augue, fringilla sit amet mi vitae, rhoncus rhoncus ligula. Curabitur sit amet tellus id massa hendrerit tincidunt. Vivamus accumsan massa sed nisi vulputate, non tempus nunc pellentesque. Phasellus ac facilisis nibh. Etiam in urna quis quam egestas feugiat.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default AboutView;
