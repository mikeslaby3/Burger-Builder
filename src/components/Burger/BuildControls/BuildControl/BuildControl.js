import React from 'react';

import classes from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.ingredientLabel}</div>
        <button>Remove</button>
        <button>Add</button>
    </div>
)

export default buildControl;