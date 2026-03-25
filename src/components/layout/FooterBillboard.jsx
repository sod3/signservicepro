import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const FooterBillboardContainer = styled.div`
  width: 100%;
  position: relative;
  /* Desktop stays full screen */
  height: 100vh; 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 768px) {
    /* Reduced height for mobile screens */
    height: 60vh; 
    min-height: 450px; /* Ensures it doesn't get too squashed on very small phones */
  }
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black; 
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('footerbackground.png');
    background-size: cover; 
    background-position: center bottom;
    background-repeat: no-repeat;
    filter: blur(4px);
  }
`;

const BillboardPositioner = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 85%; 
  max-width: 1400px;
  z-index: 1;

  @media (max-width: 768px) {
    /* Increased width to stay prominent at the lower height */
    width: 140%; 
    bottom: -5px; 
  }
`;

const BillboardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.5));
`;

const ChatWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  z-index: 10;

  @media (max-width: 768px) {
    top: 20px;
    right: 20px;
    transform: scale(0.9); /* Slightly smaller UI to match lower section height */
  }
`;

const TalkToAiButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: white;
  padding: 10px 18px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  position: relative;
`;

const TalkText = styled.span`
  font-family: 'Inter', sans-serif, Arial;
  font-weight: 700;
  font-size: 14px;
  color: #333;
`;

const SignProIcon = styled.div`
  width: 45px;
  height: 45px;
  background: linear-gradient(135deg, #7ed321 0%, #58a74e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(126, 211, 33, 0.4);
  animation: ${pulse} 3s infinite ease-in-out;
  border: 2px solid rgba(255, 255, 255, 0.2);
  position: absolute;
  top: 35px;
  
  &::before {
    content: '✦'; 
    color: white;
    font-size: 22px;
  }
`;

const FooterLinks = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.9);
  font-family: Arial, sans-serif;
  font-size: 10px;
  z-index: 15;
  /* Darker gradient at bottom for text readability on mobile */
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
    text-align: center;
    bottom: 8px;
    font-size: 9px;
  }
`;

const FooterBillboard = () => {
  return (
    <FooterBillboardContainer>
      <BackgroundLayer />

      <ChatWrapper>
        <TalkToAiButton href="#">
          <TalkText>Talk to our AI</TalkText>
        </TalkToAiButton>
        <SignProIcon />
      </ChatWrapper>

      <BillboardPositioner>
        <BillboardImage src='billboard.png' alt='Sign Installation Billboard' />
      </BillboardPositioner>

      <FooterLinks>
        <div>
          Privacy Policy | Your Privacy Choices
        </div>
        <div>
          © 2026 SIGN SERVICE PRO. All rights Reserved. &nbsp; 
          <span style={{color: '#7ed321'}}>Web Design</span> By Latin Branding
        </div>
      </FooterLinks>
    </FooterBillboardContainer>
  );
};

export default FooterBillboard;