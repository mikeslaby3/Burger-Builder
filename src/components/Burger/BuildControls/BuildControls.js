import React from 'react'

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = () => (
        <div className={classes.BuildControls}>
            {controls.map(control => (
                <BuildControl key={control.label} ingredientLabel={control.label} />
            ))}
        </div>
)

export default buildControls;