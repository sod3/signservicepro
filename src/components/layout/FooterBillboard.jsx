import React from 'react';
import styled from 'styled-components';

const FooterBillboardContainer = styled.div`
  width: 100%;
  position: relative;
  height: 100vh; // Changed to fixed height to ensure full background visibility
  overflow: hidden;
`;

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: black; // Matches the top of your background image
  
  &::before {
    content: '';
    position: absolute;
    /* Reduced the negative offset to prevent losing image detail at the edges */
    top: -2%; 
    left: -2%;
    width: 104%;
    height: 104%;
    
    background-image: url('footerbackground.png');
    /* '100% 100%' ensures the full image is visible without cropping. 
       If the aspect ratio feels off, use 'contain' and set a background-color.
    */
    background-size: 100% 100%; 
    background-position: center;
    background-repeat: no-repeat;
    
    /* Increased blur slightly to match the soft look in your reference */
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

const TalkToAiButton = styled.a`
  position: absolute;
  top: 40px;
  right: 5%;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: white;
  padding: 10px 18px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  z-index: 10;

  &:after {
    content: '';
    position: absolute;
    bottom: -8px;
    right: 20px;
    border-width: 10px 10px 0;
    border-style: solid;
    border-color: white transparent;
  }
`;

const TalkText = styled.span`
  font-family: 'Inter', sans-serif, Arial;
  font-weight: 700;
  font-size: 15px;
  color: #58a74e; // Green text to match the brand
  margin-right: 10px;
`;

const SignProIcon = styled.div`
  width: 35px;
  height: 35px;
  background-color: #7ed321;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '✦'; // Sparkle icon
    color: white;
    font-size: 20px;
  }
`;

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

      <TalkToAiButton>
        <TalkText>Talk to our AI</TalkText>
        <SignProIcon />
      </TalkToAiButton>

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