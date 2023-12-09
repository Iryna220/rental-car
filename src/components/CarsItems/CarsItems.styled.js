import styled from 'styled-components';

export const CarItemStyle = styled.li`
  display: flex;
  width: 100%;
  flex-basis: calc((100% - 1 * 16px) / 2);
  flexdirection: column;
  alignitems: flex-start;
  justifycontent: space-between;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
    gap: 20px;
    width: 209px;
  }

  @media screen and (min-width: 1440px) {
    width: 274px;
    height: 426px;
    gap: 28px;
    flex-basis: calc((100% - 3 * 29px) / 4);
  }
`;

export const CarCard = styled.div`
  display: flex;
  width: 100%;
  flexdirection: column;
  alignitems: flex-start;
  justifycontent: space-between;
  gap: 8px;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    height: 354px;
    gap: 14px;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  direction: block;
  overflow: hidden;
  width: 100%;
  height: 146px;
  objectfit: cover;
  borderradius: 14px;

  @media screen and (min-width: 768px) {
    height: 204px;
  }

  @media screen and (min-width: 1440px) {
    height: 268px;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  right: -37px;
  height: 146px;
  background: linear-gradient(
      180deg,
      rgba(18, 20, 23, 0.5) 2.5%,
      rgba(18, 20, 23, 0) 41.07%
    ),
    #f3f3f2;

  @media screen and (min-width: 768px) {
    height: 204px;
    right: -50px;
  }

  @media screen and (min-width: 1440px) {
    right: -65px;
    height: 268px;
  }
`;

export const Heart = styled.svg`
  position: absolute;
  top: 14px;
  right: 14px;
  // transition: stroke 0.3s var(--timing-function);
  // &:hover,
  // &:focus {
  //     var(--color-main-one)
  // }
`;

export const DescriptionWrap = styled.div`
  display: flex;
  width: 100%;
  flexdirection: column;
  gap: 8px;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 100%;
  flexdirection: row;
  justifycontent: space-between;
  font-size: 12px;
  fontweight: 500;
  alignitems: center;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 16px;
  }
`;

export const titleH3 = styled.h3`
  font-size: inherit;
  font-weight: inherit;
`;

export const Span = styled.span`
  color: var(--color-text-loadmore);
`;

export const DescriptListWrap = styled.div`
  display: flex;
  height: 36px;
  gap: 4px;
  flexdirection: column;
`;

export const DescriptList = styled.ul`
  display: flex;
  height: 18px;
  columngap: 6px;
  color: var(--color-text-second);
  flex-wrap: nowrap;
  overflow: hidden;
`;

export const DescriptItem = styled.li`
  display: flex;

  &:not(:last-child) {
    &:after {
      display: block;
      height: 16px;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      marginleft: 6px;
      content: '';
    }
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px;
  justifycontent: center;
  alignitems: center;
  flex-shrink: 0;
  border: none;
  border-radius: 12px;
  background: var(--color-button);
  color: var(--color-text-button);
  fontsize: 14px;
  fontweight: 600;
  lineheight: 1.4;

  &:hover,
  &:focus {
    background: var(--color-button-hover);
  }
`;
