import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import BtnQris from './BtnQris';
import BtnMerchant from './BtnMerchant';

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/btn-qris" component={BtnQris} />
                    <Route path="/btn-merchant" component={BtnMerchant} />
                </div>
            </Router>
        );
    }
}

export default Routes;