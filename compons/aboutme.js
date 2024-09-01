import Image from "next/image";
import { Fragment } from "react";
import styled from "styled-components";

const StyledAboutme = styled.section`
  .about-wrapper {
    padding: 0px 50px;
    .about-content {
      ${({ theme }) => theme.mixins.flexBetween}
      align-items: flex-start;
      .left-content {
        width: 540px;
        margin-right: 30px;
        .list-items {
          ${({ theme }) => theme.mixins.fancyList}
          .item {
            width: 50%;
            margin: 3px 0px;
            font-size: var(--fz-sm);
            display: inline-block;
          }
        }
      }

      .right-content {
        position: relative;
        z-index: 10;
        width: 300px;
        height: 300px;
        background: var(--green-tint);
        &::before {
          position: absolute;
          bottom: 0px;
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          border: 1px solid var(--green);
          transform: translate(10px, 10px);
        }
        &::after {
          position: absolute;
          top: 0px;
          content: "";
          width: 100%;
          height: 100%;
          display: block;
          border: 1px solid var(--green);
          transform: translate(-10px, -10px);
        }
        .image {
          width: 100%;
          height: 100%;
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1);
        }
        &:hover {
          cursor: grabbing;
          &::before {
            border-color: var(--slate);
            transition: var(--transition);
            transform: translate(-10px, -10px);
          }
          &::after {
            border-color: var(--slate);
            transition: var(--transition);
            transform: translate(10px, 10px);
          }
          .image {
            filter: none;
            mix-blend-mode: normal;
            transition: var(--transition);
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0px 0px;
      .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        .left-content {
          width: 100%;
          margin: 0px;
          padding-bottom: 50px;
          .list-items > .item {
            font-size: var(--fz-xs);
            letter-spacing: 0.5px;
          }
        }
        .right-content {
          width: 60%;
          height: 60%;
        }
      }
    }
  }
`;

export default function Aboutme() {
  const aboutData = [
    {
      text1:
        "Hello! My name is Simon Hemrom and I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to try editing custom WordPress themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!",
      text2:
        "Fast forward to today, and I'm looking for opportunities to work in an advertising agency, a start-up, a huge corporation, and a student-led design studio. Nowadays my main focus is to create accessible, inclusive products and digital experiences for different clients.",
      text3: "Here are a few technologies I've been working with recently:",
    },
    {
      skills: [
        "HTML5, CSS3, ES6, JSX, Ajax",
        "React and Native, Gatsby, Next",
        "GitHub, BitBucket, GitLab",
        "Express.js, Node.js, MongoDB",
        "Netlify, Heroku, Vercel, WP",
        "React Bootstrap, Material UI",
        "Chrome and Azure (Devtools)",
        "VS Code, Sublime Text, Notepad++",
        "Figma, Canva, Photopea, AI",
        "Cloudinary, Pixabay, ImageBB",
      ],
    },
  ];

  return (
    <StyledAboutme id="about-section">
      <div className="about-wrapper">
        <h2 className="numbered-heading">About Me</h2>

        <div className="about-content">
          <div className="left-content">
            {aboutData &&
              aboutData.map(({ text1, text2, text3, skills }, index) => (
                <Fragment key={index}>
                  <p>{text1}</p>
                  <p>{text2}</p>
                  <p>{text3}</p>
                  <ul className="list-items">
                    {skills &&
                      skills.map((skill, index) => (
                        <li key={index} className="item">
                          {skill}
                        </li>
                      ))}
                  </ul>
                </Fragment>
              ))}
          </div>

          <div className="right-content">
            <Image
              src="/profile.png"
              width={300}
              height={300}
              quality={90}
              alt="profile-picture"
              priority
              className="image"
            />
          </div>
        </div>
      </div>
    </StyledAboutme>
  );
}
