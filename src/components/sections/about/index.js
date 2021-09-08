import React, { Fragment } from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {
    StyledList,
    Span,
    StyledAboutRight,
    StyledAboutLeft,
    StyledAbout,
    StyledAboutWrapper
} from './AboutElements';

const Index = () => {
    const aboutData = [
        {
            text1: "Hello! My name is Msimon and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
            text2: "Fast forward to today, and I'm looking for opportunities to work in an advertising agency, a start-up, a huge corporation, and a student-led design studio. Nowadays my main focus is to create accessible, inclusive products and digital experiences for different clients.",
            text3: "Here are a few technologies I've been working with recently:",
        },
        {
            skills: ["JavaScript (ES6)", "Express.js", "Node.js", "Mongodb cloud", "React", "Bootstrap", "Wordpress", "Material ui"],
        },
    ];

    return (
        <StyledAboutWrapper id="about">
            <h2 className="numbered-heading">About component.</h2>
            <StyledAbout>
                <StyledAboutLeft>
                    {aboutData &&
                        aboutData.map(({ text1, text2, text3, skills }, i) =>
                            <Fragment key={i}>
                                <p>{text1}</p>
                                <p>{text2}</p>
                                <p>{text3}</p>
                                <StyledList>
                                    {skills &&
                                        skills.map((skill, i) =>
                                            <li key={i}>{skill}</li>
                                        )
                                    }
                                </StyledList>
                            </Fragment>
                        )
                    }
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