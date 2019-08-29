import React from 'react'

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lettuce', type: 'lettuce'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
        <div className={classes.BuildControls}>
            {controls.map(control => (
                <BuildControl
                key={control.label} 
                ingredientLabel={control.label}
                // type needs to be passed to addIngredientHandler so
                // we use an anonymous function to do so
                added={() => props.ingredientAdded(control.type)} />
            ))}
        </div>
)

export default buildControls;