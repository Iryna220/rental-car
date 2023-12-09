import styled from 'styled-components';

export const CarsListStyle = styled.ul`
  display: flex;
  flexwrap: wrap;
  row-gap: 20px;
  columngap: 15px;
  marginbottom: 100px;

  @media screen and (min-width: 768px) {
    row-gap: 30px;
    columngap: 29px;
  }
`;

export const LoadMore = styled.p`
  color: var(--color-text-loadmore);
  fontsize: 16px;
  fontweight: 500;
  textdecorationline: underline;
  margin: 0 auto;
  padding: 15px;

  &:hover,
  &:focus {
    color: var(--color-loadmore-hover);
  }
`;
