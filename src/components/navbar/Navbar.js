/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import logo from '../../images/nomi_logo.png';
import { logoStyle, navBarLinks, navBarWrapper } from './Navbar.styles.js';

export default function Navigation() {
  return (
    <div>
      <nav css={navBarWrapper}>
        <img css={logoStyle} src={logo} alt="Nomi Main Logo" />
        <div>
          <ul>
            <li css={navBarLinks}>Press</li>
            <li css={navBarLinks}>Updates</li>
            <li css={navBarLinks}>FAQs</li>
            <li css={navBarLinks}>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
