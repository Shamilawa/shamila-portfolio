import React from 'react';
import "./TableData.css"

import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function TableData(props) {
    return (
        <div className="table-data">
            <p className="table-data-columns year">{props.year}</p>
            <p className="table-data-columns title">{props.name}</p>
            <p className="table-data-columns category">{props.category}</p>
            <p className="table-data-columns technologies">{props.technologies}</p>
            <div className="table-data-columns links">
                <a target="_blank" href={props.github}> <GitHubIcon className="icons" /> </a>
                <a target="_blank" href={props.link}><LaunchIcon className="icons" /></a>
            </div>
        </div>
    )
}

export default TableData