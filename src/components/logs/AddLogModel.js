import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import { connect } from 'react-redux';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModel = ({ addLog }) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            const newLog = {
                message,
                tech,
                attention,
                date: Date.now()
            }

            addLog(newLog);

            M.toast({ html: `Log added by ${tech}` })


        }
        setMessage('');
        setAttention(false);
        setTech('');
    }
    return (
        <div id='add-log-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div class="row">
                    <div class="input-field">
                        <input value={message} name="message" type="text" onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <select name='tech'
                            value={tech}
                            className='browser-default'
                            onChange={e => setTech(e.target.value)}>
                            <option value="" disabled selected>Select Technicians</option>
                            <TechSelectOptions />
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention}
                                    value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="" onClick={onSubmit} className="modal-close waves-effect waves-light btn blue">
                    Enter
                 </a>
            </div>

        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}
export default connect(null, { addLog })(AddLogModel);
