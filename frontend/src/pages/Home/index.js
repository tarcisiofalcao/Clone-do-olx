import React from 'react';
import {Link} from 'react-router-dom';

const Page = () => {
    return(
        <>
            <h1>HOME page</h1>
            <Link to = "/about">About</Link>
        </>
    );
}

export default Page;