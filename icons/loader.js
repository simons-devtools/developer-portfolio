import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledLoaderIcon = styled.div`
  position: relative;

  .inner-logo {
    position: absolute;
    z-index: 1;
    top: 25px;
    left: 25px;
    display: block;
    animation: var(--fadeInsert) 10ms var(--easing);

    img {
      border-radius: 50%;
    }
  }
`;

const IconLoader = () => (
  <StyledLoaderIcon>
    <div className="outer-logo">
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <title>Loader Logo</title>
        <g>
          <path
            stroke="#000000"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5
           L 11, 27
           L 11, 72
           L 50, 95
           L 89, 73
           L 89, 28 z"
          />
        </g>
      </svg>
    </div>

    <div className="inner-logo">
      <Image
        src="/loader.png"
        width={50}
        height={50}
        alt="loader img"
        priority
      />
    </div>
  </StyledLoaderIcon>
);

export default IconLoader;
