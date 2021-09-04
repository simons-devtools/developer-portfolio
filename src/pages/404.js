import React from 'react';
import { Link } from 'gatsby';

const NotFoundPage = ({ location }) => {
  return (
    <div>
      <h2>Page not found!</h2>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFoundPage;