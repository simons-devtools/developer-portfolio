import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { profile } from "../config";
import { navDelay, loaderDelay } from "../src/utils";
import { usePrefersReducedMotion } from "../src/hooks";

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0 0 30px 0;
    color: var(--primary);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    letter-spacing: 2px;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin: 10px 0 20px 0;
    line-height: 1;
  }

  p {
    color: var(--black);
    margin: 20px 0 0;
    max-width: 540px;
    line-height: 26px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 40px;
  }
`;

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  });

  const one = <h1>Hi, I’m a professional_</h1>;
  const two = <h2 className="big-heading">Web Developer.</h2>;
  const three = <h3 className="big-heading">I build things for the web.</h3>;
  const four = (
    <p>
      I’m a web developer (MERN) specializing in building (and occasionally
      designing) exceptional digital experiences. Currently, I’m focused on
      building accessible, human-centered products at
      <a href={profile.branch} target="_blank" rel="noreferrer">
        Upstatement.
      </a>
    </p>
  );
  const five = (
    <a href={`mailto:${profile.email}`} className="email-link">
      Contact me for hire!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
}
