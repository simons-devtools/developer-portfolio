import theme1 from '../../../images/msimonh.png';
import theme2 from '../../../images/child-care.png';
import theme3 from '../../../images/rajshopnil.png';

const featured = [
    {
        id: 1,
        name: 'MsimonH Folio',
        image: theme1,
        website: 'https://msimon.netlify.app',
        role: 'Featured Project',
        article: 'Improve your GitHub profile and repository statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers.',
        technology: [
            { id: 1, tech: 'API' },
            { id: 2, tech: 'Netlify' },
            { id: 3, tech: 'Node.js' },
            { id: 4, tech: 'Express' },
            { id: 5, tech: 'React' },
        ],
        links: [
            { id: 1, route: 'https://github.com/spsimon-dev-tools/msimonh', icon: 'GitHub' },
            { id: 2, route: 'https://msimon.netlify.app', icon: 'External' },
        ],
    },
    {
        id: 2,
        name: 'Child Care Center',
        image: theme2,
        website: 'https://childcarebd.herokuapp.com',
        role: 'Featured Project',
        article: 'This website can only be used for private business. You can also show some of your personal data here. Share portfolios, blogs and small business offers.',
        technology: [
            { id: 1, tech: 'Heroku' },
            { id: 2, tech: 'React' },
            { id: 3, tech: 'Express' },
            { id: 4, tech: 'API' },
            { id: 5, tech: 'Node' },
        ],
        links: [
            { id: 1, route: 'https://github.com/spsimon-dev-tools/child-care', icon: 'GitHub' },
            { id: 2, route: 'https://childcarebd.herokuapp.com', icon: 'External' },
        ],
    },
    {
        id: 3,
        name: 'Rajshopnil Shop',
        image: theme3,
        website: 'https://rajshopnil.herokuapp.com',
        role: 'Featured Project',
        article: 'Improve your GitHub profile and repository statistics with your top programming language and e-commerce site data visualization. Sort by the shape of their data through your top customers',
        technology: [
            { id: 1, tech: 'API' },
            { id: 2, tech: 'Express' },
            { id: 3, tech: 'Heroku' },
            { id: 4, tech: 'Node.js' },
            { id: 5, tech: 'React' },
        ],
        links: [
            { id: 1, route: 'https://github.com/spsimon-dev-tools/rajshopnil', icon: 'GitHub' },
            { id: 2, route: 'https://rajshopnil.herokuapp.com', icon: 'External' },
        ],
    },
];

export default featured;