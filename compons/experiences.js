import React from "react";
import styled from "styled-components";
import { experiences } from "../config";

const StyledExperiences = styled.section`
  .experiences-wrapper {
    padding: 50px 150px;
    .experiences-content {
      display: flex;
      .tab-panel-items {
        height: 100%;
        border-left: 2px solid var(--slate);
        li {
          padding: 12px 15px;
          font-size: var(--fz-sm);
          transition: var(--transition);
          &.active {
            margin-left: -2px;
            color: var(--primary);
            border-left: 4px solid var(--primary);
          }
          &:hover {
            cursor: pointer;
            color: var(--primary);
            background: var(--light);
          }
        }
      }

      .tab-panel-content {
        padding: 28px 0 0 28px;
        .panel-detail {
          ${({ theme }) => theme.mixins.fadeIn}
          .panel-description > p {
            color: var(--slate);
            letter-spacing: 2px;
            padding-bottom: 15px;
          }
          .panel-items {
            ${({ theme }) => theme.mixins.fancyList}
            .item {
              margin-bottom: 20px;
              font-size: var(--fz-sm);
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      padding: 0px 0px;
      .experiences-content {
        display: flex;
        flex-direction: column;
        .tab-panel-items {
          height: 100%;
          display: flex;
          border-left: none;
          overflow-x: scroll;
          overflow-y: hidden;
          li {
            &.active {
              border-left: none;
              margin-left: 0px;
            }
          }
        }
        .tab-panel-content {
          padding: 15px 0px;
        }
      }
    }
  }
`;

export default function Experiences() {
  const { tabPanelItems, tabPanelContents } = experiences;
  const [isActive, setIsActive] = React.useState(0);

  return (
    <StyledExperiences id="experiences-section">
      <div className="experiences-wrapper">
        <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
        <div className="experiences-content">
          <ul className="tab-panel-items">
            {tabPanelItems &&
              tabPanelItems.map((item, i) => (
                <li
                  key={i}
                  className={`${i === isActive ? "active" : ""}`}
                  onClick={() => setIsActive(i)}
                >
                  {item}
                </li>
              ))}
          </ul>

          <div className="tab-panel-content">
            {tabPanelContents &&
              tabPanelContents.map(({ name, start, end, works }, i) =>
                isActive === i ? (
                  <div className="panel-detail" key={i}>
                    <div className="panel-description">
                      <h3>{name}</h3>
                      <p>
                        <small>
                          {start} - {end}
                        </small>
                      </p>
                    </div>
                    <ul className="panel-items">
                      {works &&
                        works.map((work, i) => (
                          <li key={i} className="item">
                            {work}
                          </li>
                        ))}
                    </ul>
                  </div>
                ) : null
              )}
          </div>
        </div>
      </div>
    </StyledExperiences>
  );
}
