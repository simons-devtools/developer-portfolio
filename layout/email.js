import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { profile } from "../config";
import { Side } from "../layout";

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 40px auto;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 2px;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

export default function Email({ isHome }) {
  return (
    <Side isHome={isHome} orientation="right">
      <StyledLinkWrapper>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </StyledLinkWrapper>
    </Side>
  );
}

Email.propTypes = {
  isHome: PropTypes.bool,
};
