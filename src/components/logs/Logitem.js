import React from 'react'
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';

const Logitem = ({ log, deleteLog, setCurrent }) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log Deleted' })
    }
    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-model" onClick={() => setCurrent(log)} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by <span className="black-text">
                        {log.tech}
                    </span> on  <Moment format='MMMM Do YYYY , hh:mm:ss a'>{log.date}</Moment>
                </span>
                <a href="#" onClick={onDelete} className="secondary-content"><i className="material-icons">delete</i></a>
            </div>
        </li>
    )
}

export default connect(null, { deleteLog, setCurrent })(Logitem);
