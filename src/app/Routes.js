import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import BtnQris from './BtnQris';
import BtnMerchant from './BtnMerchant';
import BtnPay from './BtnPay';
import Detail from './Detail';
import DetailPay from './DetailPay';

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/btn-qris" component={BtnQris} />
                    <Route path="/btn-merchant" component={BtnMerchant} />
                    <Route path="/btn-pay" component={BtnPay} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/detail-pay/:id" component={DetailPay} />
                </div>
            </Router>
        );
    }
}

export default Routes;