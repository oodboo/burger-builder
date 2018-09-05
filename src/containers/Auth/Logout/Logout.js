import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'; //redirecting decleratively

import {connect} from 'react-redux';
import * as actions from '../../../store/actions/index'; 


class Logout extends Component {
    componentDidMount() {
        // this.props.onLogout(this.props.history.push);
        // this.props.onLogout(this.props.history.push); 
        this.props.onLogout();
    }

    render(){
        return (
            <Redirect to="/" />
        );
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
}

export default connect(null, mapDispathToProps)(Logout);
