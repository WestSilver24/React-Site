import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ReferInfo({id, title, desc1, desc2, definition, element, tag, version, view, use}){
    return (
        <li>
            <Link to = {{ pathname: "refer-detail", state: {id, title, desc1, desc2, definition, element, tag, version, view, use} }}>
                <span className="num">{id}</span>
                <span className="attr">{title}</span>
                <span className="desc">{desc2}</span>
                <span className="Inline">{use}</span>
            </Link>
        </li>
    )
}

ReferInfo.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired, 
    desc1: PropTypes.string.isRequired, 
    desc2: PropTypes.string.isRequired, 
    definition: PropTypes.array.isRequired, 
    element: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired, 
    version: PropTypes.string.isRequired, 
    view: PropTypes.string.isRequired,
    use: PropTypes.string.isRequired,
}

export default ReferInfo;