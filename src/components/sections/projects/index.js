import React from 'react';
import projects from './projects';
import { Icon } from '../../icons';
import { Linked, BigButton } from '../../shared';
import {
    StyledMoreButton,
    StyledTechnology,
    StyledArticle,
    StyledIcon,
    StyledProject,
    StyledProjectWrapper,
    StyledHeader,
    StyledProjectContainer
} from './ProjectsElements';

const Index = () => {
    return (
        <StyledProjectContainer>
            <StyledHeader>
                <h2>Other Noteworthy Projects</h2>
                <p>View the archive</p>
            </StyledHeader>

            {/* Flex div */}
            <StyledProjectWrapper>
                {projects &&
                    projects.map(({ id, name, description, website, github, technologies }) =>
                        <StyledProject key={id}>
                            <Linked href={website} target="_blank" rel="noopener noreferrer">

                                {/* Top icons & links */}
                                <StyledIcon>
                                    <p className="folder-icon">
                                        <Icon name="Folder" />
                                    </p>
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-icon"
                                    >
                                        <Icon name="GitHub" />
                                    </a>
                                </StyledIcon>

                                {/* heading & article */}
                                <StyledArticle>
                                    <h3>{name}</h3>
                                    <p>{description}</p>
                                </StyledArticle>

                                {/* More technologies */}
                                <StyledTechnology>
                                    {technologies &&
                                        technologies.map(({ id, tech }) =>
                                            <li key={id}>{tech}</li>
                                        )
                                    }
                                </StyledTechnology>
                            </Linked>
                        </StyledProject>
                    )
                }
            </StyledProjectWrapper>

            {/* More button */}
            <StyledMoreButton>
                <Linked href="/" rel="noopener noreferrer">
                    <BigButton>Show More</BigButton>
                </Linked>
            </StyledMoreButton>
        </StyledProjectContainer >
    );
};

export default Index;