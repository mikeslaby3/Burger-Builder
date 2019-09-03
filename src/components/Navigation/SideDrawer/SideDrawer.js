import React from 'react';

import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const sideDrawer = (props) => {
    //...
    return (
        <Aux>
            <Backdrop show/>
            <div className={classes.SideDrawer}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavItems />
                </nav>
            </div>
        </Aux>
    );
}

export default sideDrawer;