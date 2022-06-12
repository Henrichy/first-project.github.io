import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import FooterContainer from './FooterContainer'
import FooterWrap from './FooterWrap'
import SocialIconLink from './SocialIconLink'
import SocialIcons from './SocialIcons'
import SocialLogo from './SocialLogo'
import SocialMedia from './SocialMedia'
import SocialMediaWrap from './SocialMediaWrap'



const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/" target="blank"
                        aria-label="Facebook" >
                         <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank"
                        aria-label="Instagram" >
                         <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank"
                        aria-label="Twitter" >
                         <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="blank"
                        aria-label="Linkedin" >
                         <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
