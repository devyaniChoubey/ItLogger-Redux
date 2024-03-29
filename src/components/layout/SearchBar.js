import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');
    const onChange = e => {
        searchLogs(text.current.value)
    }
    return (
        <div>
            <nav style={{ marginBottom: '30px' }} className="blue">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" onChange={onChange} ref={text} placeholder="Search Logs...." />
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default connect(null, { searchLogs })(SearchBar);
