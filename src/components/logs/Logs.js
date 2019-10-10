import React, { useEffect } from 'react';
import Logitem from './Logitem';
import PreLoader from '../../components/layout/PreLoader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getlogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getlogs }) => {


    useEffect(() => {
        getlogs();
        //eslint-disable-next-line
    }, []);




    if (loading || logs === null) {
        return <PreLoader />
    }
    return (
        <div className="container">
            <ul className="collection with-header">
                <li className="collection-header"><h4 className="center">System Logs</h4></li>
                {!loading && logs.length === 0 ? (<p className="center">No logs here...</p>) : (
                    logs.map(log => (
                        <Logitem log={log} key={log.id} />
                    ))
                )}
            </ul>
        </div>
    )
}

Logs.propTypes = {
    log: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    log: state.log

})

export default connect(mapStateToProps, { getlogs })(Logs);