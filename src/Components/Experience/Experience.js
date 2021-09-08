import React from 'react';
import { useState } from 'react';
import './Experience.modules.css';
import Performance from './Performance';

const Experience = () => {
    const [performance, setPerformance] = useState(Performance);
    const [isActive, setIsActive] = useState(1);

    // Sidebar all menu items:
    const sidebarMenus = [
        { id: 1, name: 'Upstatement' },
        { id: 2, name: 'PHero' },
        { id: 3, name: 'SeoClerk' },
        { id: 4, name: 'Fiverr' },
        { id: 5, name: 'HAcademy' },
        { id: 6, name: 'W3School' },
    ];

    return (
        <div id="experience" className="experience-container">
            <h1>Where I've Worked</h1>
            <div className="sidebar">

                {/* Sidebar menus */}
                <div className="sidebar-menu">
                    <ol>
                        {
                            sidebarMenus &&
                            sidebarMenus.map(({ id, name }, i) =>
                                <li
                                    key={i}
                                    className={`${id === isActive ? 'active' : ''}`}
                                    onClick={() => setIsActive(id)}>
                                    <span>{name}</span>
                                </li>
                            )
                        }
                    </ol>
                </div>
                {/* Sidebar contents */}
                {
                    performance &&
                    performance.map(({ id, name, start, end, works }, i) => isActive === id ?
                        (
                            <div className="sidebar-content" key={i}>
                                <h3>{name}</h3>
                                <p>
                                    <small>{start}</small> -
                                    <small> {end}</small>
                                </p>
                                <ol>
                                    {
                                        works && works.map(({ list }, i) =>
                                            <li key={i}>{list}</li>
                                        )
                                    }
                                </ol>
                            </div>
                        ) : null
                    )
                }
            </div>
        </div>
    );
};

export default Experience;