import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render() {
        return(
            <div className="jumbotron">
                <h1>Pluralsight administration</h1>
                <p>React, Redux andr React Router in ES6 </p>
                <Link to="about" className="btn btn-primary btn-lg">Learn mode</Link>
            </div>
        );
    }
}

export default HomePage;