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
  height: 100vh; 
  overflow: hidden;
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
    top: -2%; 
    left: -2%;
    width: 104%;
    height: 104%;
    background-image: url('footerbackground.png');
    background-size: 100% 100%; 
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(8px); 
  }
`;

const BillboardPositioner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%; 
  max-width: 1400px;
  z-index: 1;
`;

const BillboardImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  filter: drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.5));
`;

// --- UPDATED UI: ICON OUTSIDE BUBBLE ---

const ChatWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Aligns bubble and icon to the right */
  gap: 12px;
  z-index: 10;
`;

const TalkToAiButton = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  background: white;
  padding: 12px 20px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  position: relative;
  transition: transform 0.3s ease;

  // &:hover {
  //   transform: translateY(-5px);
  // }

  /* Chat bubble tail pointing DOWN to the icon */
  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 15px;
    width: 15px;
    height: 15px;
    // background: white;
    transform: rotate(45deg);
  }
`;

const TalkText = styled.span`
  font-family: 'Inter', sans-serif, Arial;
  font-weight: 700;
  font-size: 15px;
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

// --- END UPDATED UI ---

const FooterLinks = styled.div`
  position: absolute;
  bottom: 20px;
  width: 100%;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  color: rgba(255, 255, 255, 0.8);
  font-family: Arial, sans-serif;
  font-size: 12px;
  z-index: 5;
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
          © 2025 SIGN SERVICE PRO . All rights Reserved. &nbsp; 
          <span style={{color: '#7ed321'}}>Web Design</span> By Latin Branding
        </div>
      </FooterLinks>
    </FooterBillboardContainer>
  );
};

export default FooterBillboard;