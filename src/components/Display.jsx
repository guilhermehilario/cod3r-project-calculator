/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
import './Display.css';

import React from 'react';

export default props => {
    return <div className="display">{props.value}</div>
}
    