import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import featured from './featured';
import { Icon } from '../../icons';
import {
    StyledLinkedIcon,
    StyledTechnology,
    FeaturedElements,
    ImageOverlay,
    StyledFeaturedWrapper,
    StyledFeaturedContainer
} from './FeaturedElements';

const Index = () => {
    return (
        <StyledFeaturedContainer>
            <h2 className="numbered-heading">Featured component</h2>
            {featured &&
                featured.map(({ id, name, image, website, role, article, technology, links }, i) =>
                    <StyledFeaturedWrapper key={i} id={id}>
                        <ImageOverlay>
                            <a href={website} target="_blank" rel="noreferrer">
                                <img
                                    className="gatsby-image"
                                    src={image}
                                    alt="Featured-image"
                                    placeholder="blurred"
                                />
                            </a>
                        </ImageOverlay>
                        <FeaturedElements id={id}>
                            <p className="featured-one">{role}</p>
                            <h3 className="featured-two">
                                <a href={website} target="_blank" rel="noreferrer">{name}</a>
                            </h3>
                            <p className="featured-three">{article}</p>
                            <StyledTechnology id={id}>
                                {technology &&
                                    technology.map(({ id, tech }, i) =>
                                        <li key={i}>{tech}</li>
                                    )
                                }
                            </StyledTechnology>
                            <StyledLinkedIcon id={id}>
                                {links &&
                                    links.map(({ id, route, icon }, i) =>
                                        <li key={i}>
                                            <a href={route} target="_blank" rel="noreferrer">
                                                <Icon name={icon} />
                                            </a>
                                        </li>
                                    )
                                }
                            </StyledLinkedIcon>
                        </FeaturedElements>
                    </StyledFeaturedWrapper>
                )
            }
        </StyledFeaturedContainer>
    );
};

export default Index;