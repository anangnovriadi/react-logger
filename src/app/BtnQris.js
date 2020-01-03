import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../App.css';
import './custom.css';
import ReactJson from 'react-json-view';
import { IoIosApps, IoIosGlobe, IoIosTime } from "react-icons/io";
import Api from './api/Api';
import momentjs from 'moment'; 

class BtnQris extends React.Component {
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
        Api.post('http://localhost:3001/logger/list/endpoint', {
            "endpoint": ["/qrCode/generate", "/bank"]
        })
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
                        <div className={momentjs(momentjs(e.date).format('YYYY-MM-DD') + ' ' + momentjs(e.time, 'HH:mm:ss').format('hh:mm:ss')).fromNow() == 'a few seconds ago' ? 'card card-cus a-shad mt-4 mb-4 border-r' : 'card card-cus a-shad mt-4 mb-4'}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 class="card-title"><IoIosApps /> Module # QRIS + Merchant</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-right">
                                            <h5 style={{fontSize: '10px'}} class="card-title"><IoIosTime /> {momentjs(momentjs(e.date).format('YYYY-MM-DD') + ' ' + momentjs(e.time, 'HH:mm:ss').format('hh:mm:ss')).fromNow()}</h5>
                                        </div>
                                    </div>
                                </div>
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

export default BtnQris;