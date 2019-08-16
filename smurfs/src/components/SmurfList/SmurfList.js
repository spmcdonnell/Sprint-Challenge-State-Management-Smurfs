import React from 'react';
import { connect } from 'react-redux';

import Smurf from '../Smurf';

import { apiCall } from '../../actions';

function SmurfList(props) {
    const allSmurfs = props.smurfs.map((smurf, index) => <Smurf key={index} smurf={smurf} />);

    return (
        <>
            <button onClick={props.apiCall}>Get All Smurfs</button>
            <div className="smurfs">{props.smurfs.length ? allSmurfs : null}</div>
        </>
    );
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    };
};

export default connect(
    mapStateToProps,
    { apiCall }
)(SmurfList);
