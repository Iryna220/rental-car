import {
  HeaderStyled,
  MainTitel,
  NavStyled,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <MainTitel>Car rental</MainTitel>
      <NavStyled>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </NavStyled>
    </HeaderStyled>
  );
};
