import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  width: 100%;
  height: 144px;
  z-index: 99999999;

  background-color: ${(props) =>
    props.scroll > 0 ? props.theme.colors.violet : 'none'};

  @media (max-width: 507px) {
    height: 80px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 980px;
  padding: 1rem;
  margin: auto;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const LogoLink = styled.a`
  z-index: 99999999;
  @media (max-width: 1024px) {
    width: 16%;
  }

  @media (max-width: 420px) {
    width: 24%;
  }
`;

export const Logo = styled.img`
  width: 80%;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 62%;
  }
`;

export const Nav = styled.nav`
  width: 100%;

  @media (max-width: 1024px) {
    position: absolute;
    display: ${(props) => (props.menuVisibility ? 'flex' : 'none')};
    justify-content: center;
    width: 2%;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #965c96;
    z-index: 10;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding-left: 0;
  list-style: none;

  @media (max-width: 1024px) {
    display: ${(props) => (props.menuVisibility ? 'flex' : 'none')};
    flex-direction: column;
    text-align: center;
  }
`;

export const ListItem = styled.li`
  font-family: ${(props) => props.theme.fonts.join(', ')};
  font-style: normal;
  font-weight: bold;
  font-size: 1.6rem;
  list-style: none;
`;

export const ListLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightSecondary};
  transition: all 0ms linear 0s;

  :hover {
    color: #cea1ff;
    border-bottom: 2px solid #ff50cd;
  }

  &[href='${(props) => props.activeSection}'] {
    color: #ce9ffe;
    border-bottom: 2px solid #ff50cd;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
    transition-duration: 0.5s;
  }

  @media (max-width: 420px) {
    font-size: 1.4rem;
  }
`;

export const MenuToggle = styled.div`
  @media (max-width: 1024px) {
    width: 40px;
    height: 30px;
    z-index: 16;
  }
`;

const ToggleLine = styled.div`
  @media (max-width: 1024px) {
    height: 5px;
    width: 100%;
    margin: 6px auto;
    transition-duration: 0.3s;
    background-color: ${(props) => props.theme.colors.lightSecondary};
  }
`;

export const ToggleOne = styled(ToggleLine)`
  transform: ${(props) =>
    props.menuVisibility ? 'rotate(45deg) translate(7px, 7px)' : ''};
`;

export const ToggleTwo = styled(ToggleLine)`
  opacity: ${(props) => (props.menuVisibility ? 0 : 1)};
`;

export const ToggleThree = styled(ToggleLine)`
  transform: ${(props) =>
    props.menuVisibility
      ? 'rotate(-45deg) translate(8px, -9px)'
      : ''};
`;
