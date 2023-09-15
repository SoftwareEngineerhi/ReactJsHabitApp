// NotFound.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// if user write link not found then option to go to home 
function NotFound() {
    const navigate = useNavigate();
//  use Navigate hook for provide link
    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div>
            {/* show when link not found */}
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            {/* click home when page not found */}
            <button onClick={handleNavigateHome}>Go to Home</button>
        </div>
    );
}

export default NotFound;
