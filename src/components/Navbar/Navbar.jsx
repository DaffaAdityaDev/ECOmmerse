import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/commerce.png'

const Navbar = () => {
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='change.js' height='25px' className={classes.image} />
                    change.js
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show cart item' color="inherit">
                        <Badge badgeContent={}></Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar