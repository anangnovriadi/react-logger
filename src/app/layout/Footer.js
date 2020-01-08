import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div>
                <footer className="page-footer font-small footer-cus blue">
                    <div className="footer-copyright text-center py-3">© Powered by:
                        <a href="http://www.nangning.xyz/"> Nang Ning</a>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;