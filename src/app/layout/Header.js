import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white a-shad nav-custom">
                    <a className="navbar-brand" href="/">Logger V.1.0</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className={window.location.pathname == '/btn-merchant' ? "nav-item active" : "nav-item"}>
                                <Link to="/btn-merchant" className="nav-link nav-color">BTN Merchant</Link>
                            </li>
                            <li className={window.location.pathname == '/btn-qris' ? "nav-item active" : "nav-item"}>
                                <Link to="/btn-qris" className="nav-link nav-color">BTN QRIS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;