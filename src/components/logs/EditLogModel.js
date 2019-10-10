import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModel = () => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            console.log();

            setMessage('');
            setAttention(false);
            setTech('');
        }
    }
    return (
        <div id="edit-log-model" className="modal">
            <div class="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            name="message" />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <select onChange={e => setTech(e.target.value)}>
                            <option value="" disabled selected>Select Technicians</option>
                            <option value="1">Sam Smith</option>
                            <option value="2">John Doe</option>
                            <option value="3">Sara Williams</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention}
                                    onChange={e => setAttention(!attention)} value={attention} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <a href="" onClick={onSubmit} className="modal-close waves-effect waves-light btn blue">
                    Enter
                 </a>
            </div>
        </div>
    )
}

export default EditLogModel
