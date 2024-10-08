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
<<<<<<< HEAD
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g
        id="B"
        transform="translate(20.000000, 80.000000) scale(0.100000, -0.100000)"
        fill="#0969da"
        stroke="none"
      >
        <path
          d="M245 534 c-52 -8 -114 -35 -120 -53 -7 -23 20 -121 50 -181 14 -27
25 -51 25 -53 0 -2 -20 -7 -45 -10 -53 -8 -100 -30 -108 -51 -11 -27 30 -63
85 -77 68 -16 266 -16 342 0 132 29 133 107 1 147 -22 6 -39 16 -38 20 1 5 15
40 32 77 26 58 34 68 53 65 18 -2 24 -11 26 -34 4 -39 -21 -67 -52 -58 -16 5
-18 3 -10 -6 17 -17 44 -9 67 22 38 52 -7 117 -59 83 -13 -8 -24 -21 -24 -28
0 -6 -13 -40 -29 -74 l-30 -63 42 -11 c94 -25 133 -72 85 -103 -65 -41 -363
-49 -441 -12 -68 33 -37 76 66 91 43 7 47 6 47 -14 0 -29 35 -44 100 -44 145
0 121 71 -25 74 l-67 2 -36 74 c-19 41 -37 96 -40 122 -4 44 -2 48 24 61 16 7
72 15 124 17 112 5 175 -10 175 -42 0 -14 -11 -24 -40 -33 -75 -25 -262 -6
-232 24 13 13 93 23 140 17 58 -7 53 -15 -16 -24 l-52 -6 55 -1 c105 -3 108
36 4 45 -77 7 -144 -11 -144 -38 0 -28 42 -42 135 -42 83 -1 145 14 165 38 18
22 -5 53 -48 64 -47 12 -148 20 -187 15z m138 -323 c19 -19 -10 -31 -73 -31
-60 0 -73 5 -83 34 -7 17 -3 18 68 14 42 -3 81 -10 88 -17z"
        />
      </g>

      <path
        stroke="#0969da"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
=======
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
>>>>>>> v4
      />
    </div>
  </StyledLoaderIcon>
);

export default IconLoader;
