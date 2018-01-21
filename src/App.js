import React, { Component } from 'react';

import './css/normalize.css';
import './css/webflow.css';
import './css/magnuss-amazing-project.webflow.css';
import './css/v2.css';
import Register from './Register/Register';
import Register2 from './Register/Register2';
import Dashboard from './Register/Dashboard';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        return (
            <div>

                {this.props.user.register ? <Register/> : null}
                {this.props.user.register2 ? <Register2/> : null}

                {this.props.user.dashboard ? <Dashboard/> : null}




            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state, 'STATE IN showwclassrom');
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(App);
