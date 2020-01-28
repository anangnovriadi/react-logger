import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../App.css';
import './custom.css';
import ReactJson from 'react-json-view';
import { IoIosApps, IoIosGlobe, IoIosTime, IoMdEye } from "react-icons/io";
import { HashLoader } from "react-spinners";
import { css } from "@emotion/core";
import momentjs from 'moment'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
momentjs.locale('id');

const override = css`
  display: block;
  margin: 255px auto;
  border-color: red;
`;

class BtnPay extends React.Component {
    intervalId;
    
    constructor(props) {
        super(props);

        this.state = {
            row: [],
            loading: true
        }
    }

    componentDidMount() {
        this.setState({ loading: true }, () => {
            this.fetchData();
        })
    }

    componentWillMount() {
        clearTimeout(this.intervalId);
    }

    fetchData = () => {
        axios.get('http://192.168.172.39:3002/logger-pay/list')
        .then(response => {
            const row = response.data.data.rows;
            this.setState({ 
                row: row,
                loading: false
            });

            this.intervalId = setTimeout(this.fetchData.bind(this), 5000);
        });
    }
    
    render() {
        return(
            <div>
                <Header />
                <div className="container container-cus">
                    {this.state.loading ? 
                    <HashLoader
                        css={override}
                        size={55}
                        color={"#86e7d4"}
                    /> :
                    this.state.row.map((e, i) =>
                        <div key={i} className={momentjs(momentjs(e.date).format('YYYY-MM-DD') + ' ' + momentjs(e.time, 'HH:mm:ss').format('HH:mm:ss')).fromNow() === 'a few seconds ago' ? 'card card-cus a-shad mt-4 mb-4 border-r' : 'card card-cus a-shad mt-4 mb-4'}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h5 className="card-title"><IoIosApps /> Module # QRIS + Merchant</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="text-right">
                                            <h5 style={{fontSize: '10px'}} className="card-title"><IoIosTime /> {momentjs(momentjs(e.date).format('YYYY-MM-DD') + ' ' + momentjs(e.time, 'HH:mm:ss').format('HH:mm:ss')).fromNow()}</h5>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="card-title"><IoIosGlobe /> Endpoint [][][][][][] {e.endpoint} <Link to={"/detail/" + e._id}><IoMdEye /></Link></h6>
                                <div className="card-text">
                                    <ReactJson src={e} theme="hopscotch" collapsed={true} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        );
    }
}

export default BtnPay;