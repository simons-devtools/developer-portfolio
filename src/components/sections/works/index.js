import React, { Fragment, useState } from 'react';
import { tabPanels, tabPanelList } from './performance';
import { StyledListUL, StyledTabPanel, StyledTabUL, StyledWorkWrapper, StyledWorkContainer } from './WorksElements';

const Index = () => {
    console.log(tabPanels);
    const [isActive, setIsActive] = useState(1);

    return (
        <StyledWorkContainer>
            <h2 className="numbered-heading">Where I've Worked</h2>
            <StyledWorkWrapper>
                <StyledTabUL>
                    {tabPanels &&
                        tabPanels.map(({ id, name }, i) =>
                            <li
                                key={i}
                                className={`${id === isActive ? 'active' : ''}`}
                                onClick={() => setIsActive(id)}
                            >{name}</li>
                        )
                    }
                </StyledTabUL>
                {
                    tabPanelList &&
                    tabPanelList.map(({ id, name, start, end, works }, i) => isActive === id ?
                        (
                            <StyledTabPanel key={i}>
                                <Fragment>
                                    <h3>{name}</h3>
                                    <p><small>{start} - {end}</small></p>
                                </Fragment>
                                <StyledListUL>
                                    {
                                        works && works.map(({ list }, i) =>
                                            <li key={i}>{list}</li>
                                        )
                                    }
                                </StyledListUL>
                            </StyledTabPanel>
                        ) : null
                    )
                }
            </StyledWorkWrapper>
        </StyledWorkContainer>
    );
};

export default Index;