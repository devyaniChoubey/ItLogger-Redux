import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { getTechs } from '../../actions/techActions';
import TectItem from './TechItem';

const TechListModal = ({ getTechs, tech }) => {
    const { techs, loading } = tech;
    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);



    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technician List</h4>
                <ul className="collection">
                    {!loading && techs !== null &&
                        techs.map(tech => (
                            <TectItem key={tech.id} tech={tech} />
                        )
                        )}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tech: state.tech
})

export default connect(mapStateToProps, { getTechs })(TechListModal);
