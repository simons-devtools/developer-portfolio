import React from 'react';
import './Other.modules.css';
import Examples from './Examples';
import { useState } from 'react';
import FolderOutlinedIcon from '@material-ui/icons/FolderOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';

const Other = () => {
    const [examples, setExamples] = useState(Examples);
    console.log(setExamples);

    return (
        <div className="other-container">
            <div className="other-heading">
                <h1>Other Noteworthy Projects</h1>
                <strong>view the archive</strong>
            </div>

            <div className="example-wrapper">
                {
                    examples.map(example =>
                        <div className="example-info" key={example.id}>
                            <a href={example.website} target={`_blank`}>
                                <p>
                                    <span><FolderOutlinedIcon className="folder" /></span>
                                    <a href={example.github} target={`_blank`}><GitHubIcon /></a>
                                </p>
                                <article>
                                    <h2>{example.name}</h2>
                                    <p>{example.description}</p>
                                </article>
                                <ul className="technologies">
                                    {
                                        example.technologies && example.technologies.length > 0 ? example.technologies.map(tech =>
                                            <li key={tech.id}>{tech.tech}</li>
                                        ) : null
                                    }
                                </ul>
                            </a>
                        </div>
                    )
                }
            </div>
            <div className="show-more-btn">
                <a
                    href="https://msimon.netlify.app"
                    target={`_blank`}
                    className="get-in-touch-btn"
                >Show More</a>
            </div>
        </div >
    );
};

export default Other;