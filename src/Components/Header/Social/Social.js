import React from 'react';
import './Social.modules.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';

const Social = () => {
    return (
        <div className="social-link">
            <ul>
                <li><a href="https://github.com/c-moX" target={`_blank`}><GitHubIcon /></a></li>
                <li><a href="https://www.instagram.com/spsimon52" target={`_blank`}><InstagramIcon /></a></li>
                <li><a href="https://twitter.com/spsimon3" target={`_blank`}><TwitterIcon /></a></li>
                <li><a href="https://www.linkedin.com/in/simon-hembrom" target={`_blank`}><LinkedInIcon /></a></li>
                <li><a href="https://msimon.netlify.app" target={`_blank`}><LanguageIcon /></a></li>
            </ul>
        </div>
    );
};

export default Social;