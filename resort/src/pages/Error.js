import React from 'react';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
export default function Error() {
    return <Hero>
        <Banner title="404" subitle="page not found">
            <Link to="/" className='btn-primary'>Return home</Link>
        </Banner>
    </Hero>;
};
