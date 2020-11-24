import React from 'react';
import { Link } from 'react-router-dom';

const UsersDetailsPage = () => {
    return (
        <div>
            User details Page
            <Link to={'/'}> Back to users List </Link>
        </div>
    );
};

export default UsersDetailsPage;
