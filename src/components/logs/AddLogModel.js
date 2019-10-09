import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModel = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            console.log();
        }
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
export default AddLogModel;
