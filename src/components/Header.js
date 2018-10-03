import React  from 'react';

import styled from 'styled-components';

const NavBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    padding: 20px 0;
    z-index: 1001;
`;

const NavBarContainer = styled.div`
    max-width: 1100px;
    position: relative;
    margin: 0 auto;
    padding-left: 15px;
    padding-right: 15px;
`
const HeaderLogo = styled.div`
  font-size: 20px;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderText = styled.a`
  padding: 5px 10px;
  color: #fff;
 `;

const HeaderDot = styled.em`
color: #09C6AB;
`;

const Header = () => {
    return (
        <NavBar>
            <NavBarContainer>
                <HeaderLogo>
                    <HeaderText>Flight Search Engine</HeaderText>
                    <HeaderDot>.</HeaderDot>
                </HeaderLogo>
            </NavBarContainer>
        </NavBar>
    )
}

export default Header;