import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Term and Condition </h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quas dignissimos sunt dolorem ipsam fugiat totam deserunt optio asperiores perspiciatis voluptatibus tempora ullam! Laboriosam beatae libero aperiam nisi saepe eum.</p>
            <p>Go Back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;