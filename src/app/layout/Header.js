import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return(
            <div>
                <nav aria-label="breadcrumb" className="a-shad">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/"><b>App with Axios</b></Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/post">Post</Link></li>
                        <li className="breadcrumb-item active" aria-current="page"><Link to="/delete">Delete</Link></li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default Header;