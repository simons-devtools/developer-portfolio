import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { socialLinks } from "../config";
import { Side } from "../layout";
import { Icon } from "../icons";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: "";
    display: block;
    width: 2px;
    height: 90px;
    margin: 0 auto;
    background: var(--black);
  }
  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {
      margin-bottom: 20px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default function Social({ isHome }) {
  return (
    <Side isHome={isHome} orientation="left">
      <StyledSocialList>
        {socialLinks &&
          socialLinks.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </Side>
  );
}

Social.propTypes = {
  isHome: PropTypes.bool,
};
