import styled from 'styled-components';

export const CarsListStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 15px;
  margin-bottom: 100px;

  @media screen and (min-width: 768px) {
    row-gap: 30px;
    columngap: 29px;
  }
`;

export const LoadMore = styled.p`
  color: var(--color-text-loadmore);
  font-size: 16px;
  font-weight: 500;
  text-decoration-line: underline;
  margin: 0 auto;
  padding: 15px;

  &:hover,
  &:focus {
    color: var(--color-loadmore-hover);
  }
`;
