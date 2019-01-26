// @flow
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { COLORS, UNIT } from '../../constants';
import * as actions from '../../actions';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Heading from '../Heading';
import Spacer from '../Spacer';
import Paragraph from '../Paragraph';
import OrderOption from '../OrderOption';

const BACKDROP_HEIGHT = 300;

const SlopesStorefront = ({
  printWidth,
  printHeight,
  storeData,
  selectFormat,
  selectSize,
}) => {
  return (
    <Wrapper>
      <Backdrop style={{ height: BACKDROP_HEIGHT }} />

      <MainContent>
        <Column style={{ minWidth: 650 }}>
          <Header style={{ height: BACKDROP_HEIGHT }}>
            <Heading size={1}>Magnificent!</Heading>
            <Spacer size={UNIT * 4} />
            <Paragraph style={{ fontSize: 24 }}>
              You've created a unique piece of art.
              <br />
              Display it proudly!
            </Paragraph>
          </Header>

          <Spacer size={UNIT * 10} />

          <OrderOption
            label="Choose an option:"
            options={[
              { label: 'Giclée print', id: 'print' },
              { label: 'Vector image', id: 'image' },
            ]}
            comment={
              storeData.format === 'print' ? (
                <>
                  We print on <strong>Epson ultra-premium lustre</strong> paper,
                  a heavy 240-gsm acid-free paper chosen for its rich, deep
                  blacks.
                  <br />
                  <br />
                  Learn more.
                </>
              ) : (
                <>
                  Want to handle the printing yourself? This option sends you a
                  high-definition JPEG, as well as an infinitely-scalable SVG.
                  <br />
                  <br />
                  Learn more.
                </>
              )
            }
            selectedId={storeData.format}
            handleChange={value => selectFormat('slopes', value)}
          />

          {storeData.format === 'print' && (
            <>
              <Spacer size={UNIT * 6} />
              <OrderOption
                label="Select a size:"
                options={[
                  { label: '12” × 18”', id: 'small' },
                  { label: '18” × 24”', id: 'medium' },
                  { label: '24” × 36”', id: 'large' },
                ]}
                selectedId={storeData.size}
                handleChange={value => selectSize('slopes', value)}
              />
            </>
          )}

          {/* TEMP */}
          <Spacer size={500} />
        </Column>

        <Column />
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Backdrop = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  background: #f3f3f5;
`;

const MainContent = styled(MaxWidthWrapper)`
  position: relative;
  z-index: 2;
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const mapStateToProps = state => ({
  storeData: state.store.slopes,
});

const mapDispatchToProps = {
  selectFormat: actions.selectFormat,
  selectSize: actions.selectSize,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SlopesStorefront);