import React from "react";
import Image from "next/image";
import { Icon } from "../icons";
import { features } from "../config";
import styled from "styled-components";

const StyledFeatures = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.length === 1 ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => (props.length === 1 ? "100px 0px" : "0px")};
  .feature-image {
    position: relative;
    width: 565px;
    height: 320px;
    &::after {
      display: block;
      position: absolute;
      top: 0px;
      content: "";
      width: 100%;
      height: 100%;
      background: var(--green-tint);
      border-radius: var(--border-radius);
    }
    a,
    .image {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
    }
    &:hover {
      a,
      .image {
        filter: none;
        mix-blend-mode: normal;
        transition: var(--transition);
      }
      &::after {
        display: none;
        transition: var(--transition);
      }
    }
  }

  .feature-content {
    .feature-wrapper {
      position: relative;
      width: 435px;
      height: 320px;
      text-align: ${(props) => (props.length === 1 ? "left" : "right")};
      .theme-detail {
        .featured-one {
          color: var(--green);
        }
        .featured-two {
          margin-bottom: 15px;
          font-size: var(--fz-xxl);
          color: var(--lightest-slate);
          &:hover,
          &:focus {
            color: var(--green);
            transition: var(--transition);
          }
          &.inline-link {
            ${({ theme }) => theme.mixins.inlineLink};
          }
        }
        .featured-three {
          padding: 25px 25px;
          margin: ${(props) =>
            props.length === 1 ? "0px -70px 0px 0px" : "0px 0px 0px -60px"};
          background: var(--light-navy);
          border-radius: var(--border-radius);
        }
      }
      .theme-technologies {
        display: flex;
        justify-content: ${(props) => props.length !== 1 && "flex-end"};
        li {
          letter-spacing: 1.4px;
          font-size: var(--fz-xxs);
          margin: ${(props) =>
            props.length === 1 ? "10px 20px 10px 0px" : "10px 0px 10px 20px"};
        }
      }
      .theme-source {
        display: flex;
        justify-content: ${(props) => props.length !== 1 && "flex-end"};
        li {
          width: 22px;
          height: 22px;
          margin: ${(props) =>
            props.length === 1 ? "0px 20px 0px 0px" : "0px 0px 0px 20px"};
          &:hover {
            cursor: pointer;
            color: var(--green);
            transition: var(--transition);
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    position: relative;
    z-index: 1;
    flex-direction: column;
    .feature-image {
      width: 100%;
      height: 100%;
      &::after {
        background: var(--light-navy);
        /* background: var(--navy-shadow); */
      }
    }
    .feature-content {
      position: absolute;
      top: 0px;
      z-index: 0;
      .feature-wrapper {
        width: 100%;
        height: 100%;
        text-align: left;
        padding: 10px 15px;
        .theme-detail {
          .featured-one {
            margin-bottom: 10px;
            font-size: var(--fz-xs);
          }
          .featured-two {
            margin-bottom: 10px;
            font-size: var(--fz-lg);
          }
          .featured-three {
            padding: 0px 0px;
            margin: 0px 0px;
            font-size: var(--fz-xs);
            letter-spacing: 0.4px;
            border-radius: none;
            background: transparent;
          }
        }
        .theme-source,
        .theme-technologies {
          justify-content: flex-start;
          li {
            margin: 0px 20px 0px 0px;
          }
        }
      }
    }
  }
`;

export default function Features() {
  return (
    <section id="features-section">
      <h2 className="numbered-heading">Featured Projects</h2>

      {features &&
        features.map(
          (
            { role, name, image, website, article, featureds, technologies },
            i
          ) => (
            <StyledFeatures key={i} length={i}>
              <div className="feature-image">
                <a href={website} target="_blank" rel="noreferrer">
                  <Image
                    src={image}
                    width={565}
                    height={320}
                    quality={100}
                    alt="feature-image"
                    priority
                    className="image"
                  />
                </a>
              </div>
              <div className="feature-content">
                <div className="feature-wrapper">
                  <div className="theme-detail">
                    <p className="featured-one">{role}</p>
                    <a
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      className="featured-two"
                    >
                      {name}
                    </a>
                    <p className="featured-three">{article}</p>
                  </div>
                  <ul className="theme-technologies">
                    {technologies &&
                      technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                  </ul>
                  <ul className="theme-source">
                    {featureds &&
                      featureds.map(({ icon, root }, i) => (
                        <li key={i}>
                          <a href={root} target="_blank" rel="noreferrer">
                            <Icon name={icon} />
                          </a>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </StyledFeatures>
          )
        )}
    </section>
  );
}
