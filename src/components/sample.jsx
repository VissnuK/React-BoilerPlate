import React from 'react'
import { Switch, Route } from 'react-router-dom'
import SampleComponent from './SampleComponent';

const sample = props => {
    return (
        <div>
            <h2 className="pageTitle">Page Title Goes Here</h2>
            <br />
            <SampleComponent {...props} />
        </div>
    )
};

export default sample;
