import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../App.css';
import './custom.css';
import ReactJson from 'react-json-view';
import { IoIosApps, IoIosGlobe } from "react-icons/io";
import Api from './api/Api';

class BtnMerchant extends React.Component {
    intervalId;
    
    constructor(props) {
        super(props);

        this.state = {
            row: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentWillMount() {
        clearTimeout(this.intervalId);
    }

    fetchData = () => {
        Api.get('http://localhost:3001/logger/list')
        .then(response => {
            const row = response.data.data.rows;
            this.setState({ row });

            this.intervalId = setTimeout(this.fetchData.bind(this), 5000);
        });
    }
    
    render() {
        return(
            <div>
                <Header />
                <div className="container container-cus">
                    {this.state.row.map((e, i) => 
                        <div class="card a-shad mt-4 mb-4">
                            <div class="card-body">
                                <h5 class="card-title"><IoIosApps /> Module # QRIS + Merchant</h5>
                                <h6 class="card-title"><IoIosGlobe /> Endpoint [][][][][][] {e.endpoint}</h6>
                                <p class="card-text">
                                    <ReactJson src={e} theme="hopscotch" collapsed={true} />
                                </p>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default BtnMerchant;