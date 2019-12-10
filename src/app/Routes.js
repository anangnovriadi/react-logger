import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Post from './post/Post';
import Delete from './delete/Delete';

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App} />
                    <Route path="/post" component={Post} />
                    <Route path="/delete" component={Delete} />
                </div>
            </Router>
        );
    }
}

export default Routes;