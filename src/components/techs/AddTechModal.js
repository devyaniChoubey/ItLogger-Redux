import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter first and last Name' })
        } else {
            setFirstName('');
            setLastName('');
        }
    }
    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Add Technician</h4>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            name="firstName" />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input type="text" value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            name="lastName" />
                        <label htmlFor="lastName" className="active">Last Name</label>
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

export default AddTechModal
