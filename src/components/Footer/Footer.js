import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

import { UNIT, COLORS } from '../../constants';

import LogoWithName from '../LogoWithName';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Footer = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Link to="/" style={{ display: 'block', textDecoration: 'none' }}>
          <LogoWithName
            id="footer-logo"
            logoColors={{
              tGradient: [COLORS.gray[500], COLORS.gray[100]],
              sColor: COLORS.gray[300],
            }}
            nameColor={COLORS.white}
          />
        </Link>

        <Copyright>
          <strong>© 2019-present Josh Comeau.</strong> All rights reserved.
        </Copyright>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  padding: ${UNIT * 4}px 0px;
  background: ${COLORS.gray[900]};
`;

const InnerWrapper = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  /* HACK: Need this hardcoded line-height val, to align with logo */
  line-height: 28px;
  color: ${COLORS.white};
  display: inline-block;

  @media (max-width: 600px) {
    margin-top: ${UNIT * 2}px;
  }
`;

export default Footer;
