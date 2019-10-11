import React, { useState, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { updateLog } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';


const EditLogModel = ({ updateLog, current }) => {
    const [message, setMessage] = useState('');
    const [tech, setTech] = useState('');
    const [attention, setAttention] = useState(false);

    useEffect(() => {
        if (current) {
            setMessage(current.message)
            setTech(current.tech)
            setAttention(current.attention)

        }
    }, [current])


    const onSubmit = (e) => {
        e.preventDefault()
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' })
        } else {
            const updLog = {
                id: current.id,
                message,
                attention,
                tech,
                date: new Date()
            }

            updateLog(updLog);

            M.toast({ html: `Log updated by ${tech}` })
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

                    </div>
                </div>
                <div className="row">
                    <div class="input-field col s12">
                        <select value={tech} className="browser-default" name="tech" onChange={e => setTech(e.target.value)}>
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

const mapStateToProps = state => ({
    current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModel);
