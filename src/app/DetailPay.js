import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../App.css';
import './custom.css';
import ReactJson from 'react-json-view';
import { IoIosApps, IoIosGlobe, IoIosTime } from "react-icons/io";
import axios from 'axios';
import momentjs from 'moment'; 
momentjs.locale('id');

class DetailPay extends React.Component {
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
        let params = this.props.match.params.id;
        axios.get('http://192.168.172.39:3002/logger-pay/list/' + params)
        .then(response => {
            const row = response.data.data;
            this.setState({ row });

            this.intervalId = setTimeout(this.fetchData.bind(this), 5000);
        });
    }
    
    render() {
        return(
            <div>
                <Header />
                <div className="container container-cus">
                    <div className={momentjs(momentjs(this.state.row.date).format('YYYY-MM-DD') + ' ' + momentjs(this.state.row.date, 'HH:mm:ss').format('HH:mm:ss')).fromNow() === 'a few seconds ago' ? 'card a-shad mt-4 mb-4 border-r' : 'card a-shad mt-4 mb-4'}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h5 class="card-title"><IoIosApps /> Module # QRIS + Merchant</h5>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <h5 style={{fontSize: '10px'}} class="card-title"><IoIosTime /> {momentjs(momentjs(this.state.row.date).format('YYYY-MM-DD') + ' ' + momentjs(this.state.row.date, 'HH:mm:ss').format('HH:mm:ss')).fromNow()}</h5>
                                    </div>
                                </div>
                            </div>
                            <h6 class="card-title"><IoIosGlobe /> Endpoint [][][][][][] {this.state.row.endpoint}</h6>
                            <p class="card-text">
                                <ReactJson src={this.state.row} theme="hopscotch" collapsed={false} />
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default DetailPay;