import React from 'react'
import { connect } from 'react-redux';
import { deleteTechs } from '../../actions/techActions';
import M from 'materialize-css/dist/js/materialize.min.js';


const TechItem = ({ tech: { lastName, firstName, id }, deleteTechs }) => {
    const onDelete = () => {
        deleteTechs(id)
        M.toast({ html: ` Tech ${firstName} ${lastName} is deleted` })
    }
    return (
        <li className="collection-item">
            <div>
                {firstName} {lastName}
                <a href="#" onClick={onDelete} className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

export default connect(null, { deleteTechs })(TechItem)
