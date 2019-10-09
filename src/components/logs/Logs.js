import React, { useState, useEffect } from 'react';
import Logitem from './Logitem';
import PreLoader from '../../components/layout/PreLoader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getlogs();
        //eslint-disable-next-line
    }, [])
    const getlogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();

        setLogs(data);
        setLoading(false);
    }

    if (loading) {
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

export default Logs;