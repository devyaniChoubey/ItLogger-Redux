import React from 'react'

const Logitem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a href="#">{log.message}</a>
            </div>
        </li>
    )
}

export default Logitem;
