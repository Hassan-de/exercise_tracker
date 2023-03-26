import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <>
        <div class="error-container">
    <div class="error-message">
        <div>
        <h1 id="h1">404</h1>
    </div>
        <h2 id="h2">Page not Found</h2>
        <p id="p">The page you are looking for might have been removed temporarily.</p>
        <a id="a" href="/">Back to homepage</a>
  </div>
</div>
        </>
    )}

    export default Errorpage;