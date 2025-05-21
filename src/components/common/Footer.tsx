"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useState, useEffect } from "react";

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background: linear-gradient(
      0deg,
      rgba(27, 38, 50, 0.9),
      rgba(27, 38, 50, 0.9)
    ),
    url("/images/ourServices.jpg");
  background-size: cover;
  background-position: center;
  color: #ffffff;

  @media (min-width: 1025px) {
    height: auto;
    min-height: 550px;
    padding: 60px 0 40px;
  }

  @media (max-width: 1024px) {
    height: auto;
    padding: 50px 16px 30px;
  }
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    height: 100%;
    padding: 0 20px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const AddressSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    width: 50%;
    max-width: 560px;
    margin-bottom: 40px;
    margin-top: 20px;
    order: 1;
  }

  @media (max-width: 1024px) {
    margin: 40px 0 30px;
    align-items: center;
    order: 3; /* Move address section down according to sequence */
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    /* Changed from column to row to keep icon beside address */
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }
`;

const LocationIcon = styled.div`
  margin-right: 16px;

  @media (max-width: 1024px) {
    margin-right: 16px;
    margin-bottom: 0;
    margin-top: 3px;
  }

  @media (max-width: 768px) {
    margin-right: 12px; /* Slightly less margin for mobile */
  }
`;

const LocationIconImage = styled(Image)`
  @media (max-width: 1024px) {
    width: 30px !important;
    height: 30px !important;
  }

  @media (max-width: 768px) {
    width: 24px !important;
    height: 24px !important;
  }
`;

const AddressContent = styled.div`
  @media (max-width: 1024px) {
    text-align: left; /* Changed from center to left for better alignment with icon */
  }
`;

const MainAddress = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0;

  @media (max-width: 1024px) {
    font-size: 22px;
    line-height: 110%;
  }
`;

const FullAddress = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 110%;
  letter-spacing: -0.03em;
  color: #919191;
  margin: 10px 0 20px;

  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 140%;
    margin: 8px 0 16px;
  }
`;

const ViewOnMaps = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.03em;
  text-decoration-line: underline;
  color: #ffffff;
  display: inline-block;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ContactCard = styled.div`
  background: #d9d9d9;
  border-radius: 25px;
  color: #000000;
  /* box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); */

  @media (min-width: 1025px) {
    width: 45%;
    max-width: 600px;
    padding: 40px;
    margin-left: auto;
    order: 2;
  }

  @media (max-width: 1024px) {
    background: transparent;
    padding: 0;
    text-align: center;
    margin-bottom: 20px;
    color: #ffffff;
    order: 1; /* Move to top according to sequence */
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    margin: 0;
    order: 2; /* Within CallAndLogoContainer */
  }

  @media (max-width: 1024px) {
    margin-bottom: 20px;
    order: 1; /* First item in the sequence */
  }
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoName = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.3em;
  margin: 0;

  @media (min-width: 1025px) {
    color: #000000;
    font-size: 22px;
  }

  @media (max-width: 1024px) {
    color: #ffffff;
  }
`;

const LogoSubtitle = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.26em;
  margin: 0;

  @media (min-width: 1025px) {
    color: #000000;
    font-size: 12px;
    margin-top: 2px;
  }

  @media (max-width: 1024px) {
    color: #ffffff;
  }
`;

const ContactTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin: 0 0 15px;
  max-width: 460px;

  @media (max-width: 1024px) {
    font-size: 20px;
    margin: 20px auto 15px;
    text-align: center;
    line-height: 130%;
  }
`;

const ConsultText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.03em;
  margin: 0 0 30px;
  max-width: 460px;

  @media (max-width: 1024px) {
    margin: 0 auto 20px;
    text-align: center;
  }
`;

// New container for call button and logo in desktop only
const CallAndLogoContainer = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

const CallButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #1b2632;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 7px 12px 6px rgba(0, 0, 0, 0.3),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1025px) {
    width: auto;
    margin-bottom: 0;
    padding: 14px 12px;
    min-width: 210px;
    order: 1; /* Within CallAndLogoContainer */
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 302px;
    background: #ffffff;
    margin: 0 auto 30px;
    order: 3; /* After consult text according to sequence */
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  white-space: nowrap;

  ${CallButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 1025px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (max-width: 1024px) {
    color: #1b2632;
    font-size: 18px;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  @media (min-width: 1025px) {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    justify-content: center;
    margin-top: 0;
    margin-bottom: 30px;
    order: 4; /* After call button according to sequence */
  }
`;

const EmailIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmailAddress = styled.a`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 1025px) {
    color: #000000;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;

  @media (min-width: 1025px) {
    padding-top: 50px;
    width: 100%;
    margin-top: 60px;
    flex-direction: row;
    justify-content: space-between;
    order: 3;
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    order: 4; /* Last section according to sequence */
  }
`;

const LegalLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

  @media (min-width: 1025px) {
    margin-bottom: 0;
    justify-content: flex-end;
    order: 2; /* Within FooterBottom */
    flex-wrap: wrap;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
    order: 1; /* First within FooterBottom according to sequence */
    flex-wrap: nowrap; /* Keep all links on a single line */
    width: 100%;
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.17em;
  color: #ffffff;
  margin: 0 20px;
  text-decoration: none;
  transition: opacity 0.3s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  @media (min-width: 1025px) {
    margin: 0 0 0 40px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;

    margin: 0 10px;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }
`;

const Copyright = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.1em;
  color: #ffffff;
  margin: 0;
  opacity: 0.8;

  @media (min-width: 1025px) {
    text-align: left;
    order: 1; /* Within FooterBottom */
  }

  @media (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    flex-direction: column; /* Stack the text on mobile/tablet */
    order: 2; /* After legal links within FooterBottom */
  }
`;

const AllRightsReserved = styled.span`
  @media (max-width: 1024px) {
    margin-top: 5px; /* Add space between the copyright year and "All rights reserved" */
  }
`;

const ResponsiveLocationIcon = () => {
  const [iconSize, setIconSize] = useState(38);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1025) {
        setIconSize(38);
      } else if (window.innerWidth <= 768) {
        setIconSize(24);
      } else {
        setIconSize(30);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <Image
      src="/images/location.svg"
      alt="Location"
      width={iconSize}
      height={iconSize}
    />
  );
};

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1025);

      setIsMobile(window.innerWidth <= 1024);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FooterContainer>
      <FooterContent>
        {/* For desktop view - original structure */}
        {isDesktop && (
          <>
            <AddressSection>
              <LocationWrapper>
                <LocationIcon>
                  <img
                    src="/images/location.svg"
                    alt="Location"
                    width="34"
                    height="34"
                  />
                </LocationIcon>
                <AddressContent>
                  <MainAddress>3055 Wilshire Blvd #1120</MainAddress>
                  <FullAddress>
                    3055 Wilshire Blvd, Los Angeles, CA 90010
                  </FullAddress>
                  <ViewOnMaps
                    href="https://maps.google.com/?q=3055+Wilshire+Blvd+%231120,+Los+Angeles,+CA+90010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Maps
                  </ViewOnMaps>
                </AddressContent>
              </LocationWrapper>
            </AddressSection>

            <ContactCard>
              <ContactTitle>
                HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED
              </ContactTitle>
              <ConsultText>Consult With An Attorney For Free!</ConsultText>

              <CallAndLogoContainer>
                <CallButton href="tel:+12138338361">
                  <ButtonText>Call Now +1 213-833-8361</ButtonText>
                  <Image
                    src="/images/Arrow_white.svg"
                    alt="Arrow"
                    width={20}
                    height={15}
                    style={{ height: "auto" }}
                  />
                </CallButton>

                <LogoContainer>
                  <LogoText>
                    <LogoName>KATHY</LogoName>
                    <LogoName style={{ marginLeft: "10px" }}>RABII</LogoName>
                  </LogoText>
                  <LogoSubtitle>LAW GROUP</LogoSubtitle>
                </LogoContainer>
              </CallAndLogoContainer>

              <EmailContainer>
                <EmailIcon>
                  <Image
                    src="/images/dark-email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </EmailIcon>
                <EmailAddress href="mailto:kathy@krinjurylawfirm.com">
                  kathy@krinjurylawfirm.com
                </EmailAddress>
              </EmailContainer>
            </ContactCard>

            <FooterBottom>
              <Copyright>
                Copyright © {new Date().getFullYear()} KR LAW GROUP - All rights
                reserved.
              </Copyright>
              <LegalLinks>
                <LegalLink href="/terms-of-use">Terms of Use</LegalLink>
                <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>
                <LegalLink href="/anti-spam">Anti-Spam</LegalLink>
              </LegalLinks>
            </FooterBottom>
          </>
        )}

        {/* For mobile and tablet view - common structure */}
        {isMobile && (
          <>
            {/* 1. KATHY RABII LAW GROUP */}
            <LogoContainer>
              <LogoText>
                <LogoName>KATHY</LogoName>
                <LogoName style={{ marginLeft: "10px" }}>RABII</LogoName>
              </LogoText>
              <LogoSubtitle>LAW GROUP</LogoSubtitle>
            </LogoContainer>

            {/* 2-3. HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED + Consult With An Attorney For Free! */}
            <ContactCard>
              <ContactTitle>
                HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED
              </ContactTitle>
              <ConsultText>Consult With An Attorney For Free!</ConsultText>
            </ContactCard>

            {/* 4. Call Now Button */}
            <CallButton href="tel:+12138338361">
              <ButtonText>Call Now +1 213-833-8361</ButtonText>
              <Image
                src="/images/Arrow_white.svg"
                alt="Arrow"
                width={20}
                height={15}
                style={{ height: "auto" }}
              />
            </CallButton>

            {/* 5. Email */}
            <EmailContainer>
              <EmailIcon>
                <Image
                  src="/images/light-email.svg"
                  alt="Email"
                  width={24}
                  height={24}
                />
              </EmailIcon>
              <EmailAddress href="mailto:kathy@krinjurylawfirm.com">
                kathy@krinjurylawfirm.com
              </EmailAddress>
            </EmailContainer>

            {/* 6-8. Address Section */}
            <AddressSection>
              <LocationWrapper>
                <LocationIcon>
                  {isDesktop ? (
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      width="34"
                      height="34"
                    />
                  ) : (
                    <img
                      src="/images/location.svg"
                      alt="Location"
                      width={isMobile && window.innerWidth <= 768 ? "24" : "30"}
                      height={
                        isMobile && window.innerWidth <= 768 ? "24" : "30"
                      }
                    />
                  )}
                </LocationIcon>
                <AddressContent>
                  <MainAddress>3055 Wilshire Blvd #1120</MainAddress>
                  <FullAddress>
                    3055 Wilshire Blvd, Los Angeles, CA 90010
                  </FullAddress>
                  <ViewOnMaps
                    href="https://maps.google.com/?q=3055+Wilshire+Blvd+%231120,+Los+Angeles,+CA+90010"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on Maps
                  </ViewOnMaps>
                </AddressContent>
              </LocationWrapper>
            </AddressSection>

            {/* 9-10. Footer Bottom - mobile/tablet version */}
            <FooterBottom>
              <LegalLinks>
                <LegalLink href="/terms-of-use">Terms of Use</LegalLink>
                <LegalLink href="/privacy-policy">Privacy Policy</LegalLink>
                <LegalLink href="/anti-spam">Anti-Spam</LegalLink>
              </LegalLinks>
              <Copyright>
                Copyright © {new Date().getFullYear()} KR LAW GROUP
                <AllRightsReserved>All rights reserved.</AllRightsReserved>
              </Copyright>
            </FooterBottom>
          </>
        )}
      </FooterContent>
    </FooterContainer>
  );
}
