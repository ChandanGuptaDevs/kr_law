import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/home_imgs/kr_law_logo.webp";

const HeaderContainer = styled.header`
  background-color: #000000;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-family: "Spartan", sans-serif;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
    height: auto;
    padding: 15px 20px;
  }
`;

const LogoWrapper = styled.div`
  @media (max-width: 1024px) {
    order: 1;
  }
`;

const LogoImg = styled.img`
  max-height: 60px;
  width: auto;
`;

const Navigation = styled.nav`
  display: flex;
  gap: 30px;
  margin-left: auto;
  margin-right: 20px;

  @media (max-width: 1024px) {
    flex-basis: 100%;
    justify-content: center;
    margin-top: 15px;
    margin-left: 0;
    margin-right: 0;
    gap: 20px;
    flex-wrap: wrap;
    order: 3;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #ba0a02;
  }
`;

const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: #ba0a02;
  }
`;

const NavItem = styled.div`
  position: relative;
  &:hover > ${StyledLink}, &:hover > ${NavLink} {
    color: #ba0a02;
  }
  &:hover > div {
    display: block;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const DropdownMenu = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  background-color: #111111;
  min-width: 300px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 15px 0;
  z-index: 10;
  border-top: 2px solid #ba0a02;
  @media (max-width: 768px) {
    position: static;
    background-color: #222222;
    box-shadow: none;
    width: 100%;
    border-top: none;
    padding: 10px 0;
    margin-top: 10px;
  }
`;

const StyledDropdownLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 20px;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    background-color: #222222;
    color: #ba0a02;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    &:hover {
      background-color: #333333;
    }
  }
`;

const DropdownLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  padding: 10px 20px;
  display: block;
  transition: all 0.3s ease;
  &:hover {
    background-color: #222222;
    color: #ba0a02;
  }
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 12px;
    &:hover {
      background-color: #333333;
    }
  }
`;

const ContactBox = styled.div`
  background-color: #ba0a02;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;

  @media (max-width: 1024px) {
    order: 2;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ConsultationText = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
`;

const PhoneNumber = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  margin: 5px 0;
`;

const TaglineSmall = styled.p`
  margin: 0;
  font-size: 12px;
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    order: 1;
    margin-left: auto;
  }
`;

const MobileDropdownToggle = styled.span`
  display: none;
  @media (max-width: 768px) {
    display: inline-block;
    margin-left: 5px;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [practiceAreasOpen, setPracticeAreasOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const togglePracticeAreas = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPracticeAreasOpen(!practiceAreasOpen);
  };

  return (
    <HeaderContainer>
      <LogoWrapper>
        <Link to="/">
          <LogoImg src={LogoImage} alt="KR Law Logo" />
        </Link>
      </LogoWrapper>

      <MenuToggle onClick={toggleMenu}>{menuOpen ? "✕" : "☰"}</MenuToggle>

      <Navigation isOpen={menuOpen}>
        <NavItem>
          <NavLink href="#" onClick={togglePracticeAreas}>
            PRACTICE AREAS
            <MobileDropdownToggle
              isOpen={practiceAreasOpen}
              onClick={togglePracticeAreas}
            >
              ▼
            </MobileDropdownToggle>
          </NavLink>

          <DropdownMenu
            style={{
              display:
                practiceAreasOpen && window.innerWidth <= 768 ? "block" : "",
            }}
          >
            <DropdownLink href="#">
              CALIFORNIA AT FAULT ACCIDENT REPORTING
            </DropdownLink>
            <DropdownLink href="#">CAR ACCIDENTS</DropdownLink>
            <DropdownLink href="#">ACCIDENT LAWYER</DropdownLink>
            <DropdownLink href="#">RENTAL CAR ACCIDENT</DropdownLink>
            <DropdownLink href="#">PEDESTRIAN ACCIDENT</DropdownLink>
            <DropdownLink href="#">AIRBNB ATTORNEY</DropdownLink>
            <DropdownLink href="#">UBER ACCIDENT LAWYERS</DropdownLink>
            <DropdownLink href="#">WRONGFUL DEATH ATTORNEY</DropdownLink>
            <DropdownLink href="#">ELECTRIC SCOOTER ACCIDENT</DropdownLink>
          </DropdownMenu>
        </NavItem>

        <NavItem>
          <StyledLink to="/about">ABOUT US</StyledLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">BLOG</NavLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact">CONTACT</StyledLink>
        </NavItem>
      </Navigation>

      <ContactBox>
        <ConsultationText>FREE CONSULTATION</ConsultationText>
        <PhoneNumber href="tel:+12138338361">+1 213-833-8361</PhoneNumber>
        <TaglineSmall>Pay Nothing Until YOU Win!</TaglineSmall>
      </ContactBox>
    </HeaderContainer>
  );
};

export default Header;
