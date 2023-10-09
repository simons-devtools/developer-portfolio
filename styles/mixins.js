import { css, keyframes } from "styled-components";

const fadein = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const button = css`
  color: var(--primary);
  background-color: transparent;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius);
  font-size: var(--fz-xs);
  font-family: var(--font-roboto);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition);
  padding: 1.25rem 1.75rem;
  &:hover,
  &:focus,
  &:active {
    background-color: var(--green-tint);
    outline: none;
  }
  &:after {
    display: none !important;
  }
`;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: var(--lightest-slate);
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--primary);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--primary);
    margin: 0px 5px;
    &:hover,
    &:focus,
    &:active {
      color: var(--primary);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--primary) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1.5px;
      position: relative;
      bottom: 0.37em;
      background-color: var(--primary);
      transition: var(--transition);
      opacity: 0.5;
    }
  `,

  button,
  smallButton: css`
    color: var(--primary);
    background: transparent;
    border: 2px solid var(--primary);
    border-radius: var(--border-radius);
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    letter-spacing: 1px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--primary);
    background-color: transparent;
    border: 2px solid var(--primary);
    border-radius: var(--border-radius);
    padding: 1.25rem 2.5rem;
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    letter-spacing: 1.4px;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      color: var(--black);
      line-height: 1.5;
      &:before {
        content: "▹";
        position: absolute;
        top: -14px;
        left: -8px;
        color: var(--primary);
        font-size: var(--fz-heading);
      }
    }
  `,

  fadeIn: css`
    animation: ${fadein} 1s both;
  `,

  fadeInAll: css`
    animation: ${fadein} 3s both;
  `,
};

export default mixins;
