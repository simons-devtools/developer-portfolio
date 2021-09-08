import React from 'react';
import './Work.modules.css';
import Projects from './Projects';
import { useState } from 'react';

const Work = () => {
    const [projects, setProjects] = useState(Projects);
    console.log(setProjects);

    return (
        <div id="work" className="work-container">
            <h1>Some Things I’ve Built</h1>
            {
                projects.map(project =>
                    <div className={`${project.id === 2 ? 'theme-wrapper2' : 'theme-wrapper1'}`} key={project.id}>
                        <div className="theme-photo">
                            <a href={project.website} target={`_blank`}><img src={project.image} alt="" /></a>
                        </div>
                        <div className="theme-info">
                            <div className={`${project.id === 2 ? 'theme-description2' : 'theme-description'}`}>
                                <strong>{project.role}</strong>
                                <h2><a href={project.website} target={`_blank`}>{project.name}</a></h2>
                                <article>{project.article}</article>
                            </div>
                            <div className={`${project.id === 2 ? 'theme-outline2' : 'theme-outline'}`}>
                                <ul>
                                    {
                                        project.technologies && project.technologies.length > 0 ?
                                            project.technologies.map(tech => <li key={tech.id}>{tech.tech}</li>) : null
                                    }
                                </ul>
                                <ul>
                                    {
                                        project.links && project.links.length > 0 ?
                                            project.links.map(link => <li key={link.id}><a href={link.route} target={`_blank`}>{link.icon}</a></li>) : null
                                    }
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Work;