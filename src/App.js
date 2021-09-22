import Hero from './components/hero/Hero.js';
import Navigation from './components/navbar/Navbar.js';
// import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */
import { navBarLinks } from './components/navbar/Navbar.styles.js';

function App() {
  return (
    <div /* css={AppStyles} */>
      <Navigation />
      <Hero />
      {/*       <Hero />
      <Reviews />
      <HowTo />
      <CTA />
      <Footer /> */}
    </div>
  );
}

export default App;
