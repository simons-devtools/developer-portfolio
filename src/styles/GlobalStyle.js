
import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import TransitionStyle from './TransitionStyle';

const GlobalStyle = createGlobalStyle`
  ${variables};
  html {
    box-sizing: border-box;
    width: 100%;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }
  :focus {
    outline: 2px dashed var(--green);
    outline-offset: 3px;
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--navy);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--navy);
    color: var(--slate);
    font-family: var(--font-sans);
    font-size: var(--fz-md);
    line-height: 1.6;
    &.hidden {
      overflow: hidden;
    }
    @media screen and (max-width: 768px) {
      &.blur {
      overflow: hidden;
      #content > * {
        filter: blur(5px) brightness(0.8);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
    }
  }
  section {
    margin: 0 auto;
    padding: 100px 0;
    max-width: 1000px;
    @media (max-width: 768px) {
      padding: 80px 0;
    }
    @media (max-width: 480px) {
      padding: 60px 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: normal;
    color: var(--lightest-slate);
    line-height: 1.1;
  }

  .big-heading {
    font-size: 60px;
    font-family: sans-serif, monospace;
    font-weight: 900;
    @media (max-width: 768px) {
      font-size: var(--fz-heading);
      font-weight: bold;
    }
  }
  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
  }
  .numbered-heading {
    display: flex;
    align-items: center;
    position: relative;
    margin: 0 0 20px 0;
    width: 100%;
    font-size: var(--fz-heading);
    white-space: nowrap;
    &:before {
      position: relative;
      bottom: 1px;
      counter-increment: section;
      content: '0' counter(section) '.';
      margin-right: 10px;
      color: var(--green);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;
      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }
    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);
      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
  img,
  svg,
  .blur-image-wrapper {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  /* img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  } */
  #logo {
    color: var(--green);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    &.feather {
      fill: none;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: var(--green);
    }
    &.inline-link {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }
  ul,ol {
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      color: var(--lightest-slate);
      font-size: var(--fz-xs);
      letter-spacing: 0.5px;
    }
  }
  p {
    margin: 0 0 15px 0;
    &:last-child,
    &:last-of-type {
      margin: 0;
    }
    & > a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
    & > code {
      background-color: var(--light-navy);
      color: var(--white);
      font-size: var(--fz-sm);
      border-radius: var(--border-radius);
      padding: 0.3em 0.5em;
    }
  }
  ${TransitionStyle};
`;

export default GlobalStyle;