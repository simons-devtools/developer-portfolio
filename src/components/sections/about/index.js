import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Span, StyledAboutRight, StyledAboutLeft, StyledAbout, StyledAboutWrapper } from './AboutElements';

const Index = () => {
    return (
        <StyledAboutWrapper>
            <h2 className="numbered-heading">About component.</h2>
            <StyledAbout>
                <StyledAboutLeft>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque cumque atque repellat modi recusandae rerum mollitia voluptate ex magnam at aperiam accusantium tempore porro quos quisquam, id explicabo, repudiandae cum eius laudantium suscipit odit. Consequuntur consectetur esse et? Eum quibusdam facere a quod earum tempora, ea placeat deleniti cum recusandae? Laudantium nam numquam esse ad? Molestias iste maxime praesentium fugiat dolorem, dolore hic repellendus aliquam laborum pariatur eum enim unde voluptate odit quo odio exercitationem nobis suscipit molestiae, expedita doloremque inventore ex? Sequi, voluptates minima harum accusamus soluta accusantium ullam praesentium natus distinctio officiis illum. At ratione consectetur nostrum laborum?</p>
                </StyledAboutLeft>
                <StyledAboutRight>
                    <StaticImage
                        className="imgStyled"
                        src="../../../images/me.png"
                        alt="Gatsby-img"
                    />
                    <Span></Span>
                </StyledAboutRight>
            </StyledAbout>
        </StyledAboutWrapper>
    );
};

export default Index;