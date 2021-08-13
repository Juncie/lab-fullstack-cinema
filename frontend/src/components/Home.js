<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to='/MoviesList'>
                <button>Check the movies!</button>
            </Link>
        </div>
    );

    }
=======
import React from 'react';
import {Link} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            this is the home page
            <Link to="/movies"><button>Check out these movies!</button></Link>
        </div>
    );
}

>>>>>>> 711b78a1f83383bbd6603a21e8ee3c996593cef9
export default Home;