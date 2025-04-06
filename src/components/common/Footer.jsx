import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  padding: 0 20px;
`;

const HorizontalDivider = styled.div`
  width: calc(100% + 40px);
  height: 1px;
  background-color: #ddd;
  margin: 0 -20px;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
  }
`;

const MapContainer = styled.div`
  flex: 0 0 42%;
  aspect-ratio: 4/3;
  min-width: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
    aspect-ratio: 4/3;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const VerticalDivider = styled.div`
  position: absolute;
  left: 50%;
  top: 10%;
  bottom: 10%;
  width: 2px;
  background-color: #ddd;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.05), 2px 0 8px rgba(0, 0, 0, 0.05);
  transform: translateX(-50%);
  @media (max-width: 768px) {
    display: none;
  }
`;

const LocationCard = styled.div`
  flex: 0 0 48%;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    padding: 0 15px;
    margin-bottom: 30px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 25px 15px;
  }
`;

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const LocationIcon = styled.div`
  color: #ba0a02;
  font-size: 32px;
  margin-right: 15px;

  svg {
    width: 32px;
    height: 32px;
    stroke: #ba0a02;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
  }
`;

const FirmName = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #333;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const OfficeName = styled.h4`
  font-size: 20px;
  color: #ba0a02;
  margin: 0 0 25px 0;
  padding-left: 47px;
  font-weight: 600;

  @media (max-width: 768px) {
    padding-left: 0;
    margin: 0 0 20px 0;
    font-size: 18px;
  }
`;

const AddressBlock = styled.div`
  padding-left: 47px;
  font-size: 18px;
  line-height: 2;
  color: #444;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    padding-left: 0;
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  padding-left: 47px;
  margin-top: 25px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Phone = styled.a`
  display: block;
  color: #ba0a02;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 15px;
  transition: color 0.2s;

  &:hover {
    color: #990902;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
    font-size: 17px;
    padding: 8px 15px;
    border: 1px solid #ba0a02;
    border-radius: 20px;

    &:hover {
      background-color: rgba(186, 10, 2, 0.05);
    }
  }
`;

const Email = styled.a`
  display: block;
  color: #ba0a02;
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  transition: color 0.2s;

  &:hover {
    color: #990902;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FooterNav = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 20px 10px;
    /* background-color: #f5f5f5; */
    border-radius: 8px;
    margin-bottom: 20px;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px 15px;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin: 0;

  @media (max-width: 768px) {
    margin: 0;
    border: none;
    width: auto;
  }
`;

const NavLink = styled.a`
  color: #ba0a02;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: #990902;
  }

  @media (max-width: 768px) {
    display: inline-block;
    padding: 8px 12px;
    font-size: 14px;
    background-color: white;
    border-radius: 16px;
    /* border: 1px solid #e0e0e0; */

    &:hover {
      background-color: rgba(186, 10, 2, 0.05);
    }
  }
`;
const Copyright = styled.div`
  text-align: center;
  padding: 25px 0;
  font-size: 15px;
  color: #555;
  line-height: 1.6;

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 14px;
  }
`;

const Footer = () => {
  // Google Maps embed with satellite view
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203483836!2d-118.2968386!3d34.059061599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7985a335d75%3A0xa6b5d423f54057bb!2s3055%20Wilshire%20Blvd%20%231120%2C%20Los%20Angeles%2C%20CA%2090010!5e1!3m2!1sen!2sus!4v1686701209037!5m2!1sen!2sus";

  return (
    <FooterContainer>
      <ContentWrapper>
        <MapContainer>
          <MapIframe
            src={mapSrc}
            title="KR Law Group Office Location"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></MapIframe>
        </MapContainer>

        <VerticalDivider />

        <LocationCard>
          <LocationHeader>
            <LocationIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
            </LocationIcon>
            <FirmName>KR LAW GROUP</FirmName>
          </LocationHeader>

          <OfficeName>Los Angeles Office</OfficeName>

          <AddressBlock>
            3055 Wilshire Blvd #1120
            <br />
            Los Angeles, CA 90010
          </AddressBlock>

          <ContactInfo>
            <Phone href="tel:+12138338361">+1 213-833-8361</Phone>
            <Email href="mailto:kathy@krinjurylawfirm.com">
              kathy@krinjurylawfirm.com
            </Email>
          </ContactInfo>
        </LocationCard>
      </ContentWrapper>

      <HorizontalDivider />

      <FooterNav>
        <NavLinks>
          <NavItem>
            <NavLink href="#">Practice Areas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Service Areas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Blog</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Terms of Use</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Privacy Policy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Anti-Spam</NavLink>
          </NavItem>
        </NavLinks>
      </FooterNav>

      <Copyright>
        Copyright © 2025 KR LAW GROUP - All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};
export default Footer;
