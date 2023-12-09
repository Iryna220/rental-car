import styled from 'styled-components';

export const Section = styled.section`
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  maxwidth: 375px;
  margin: 0 auto;
  width: 100%;
  padding: 0px 30px;
  marginbottom: 20px;

  @media screen and (min-width: 768px) {
    maxwidth: 768px;
    padding: 0px 50px;
    marginbottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    maxwidth: 1440px;
    padding: 0px 128px;
    marginbottom: 50px;
  }
`;
