import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/commerce.png'
import useStyles from './styles'

const Navbar = ({ totalItem }) => {
    const classes = useStyles();
    const location = useLocation();
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                    <img src={logo} alt='change.js' height='25px' className={classes.image} /> change.js
                </Typography>
                <div className={classes.grow} />
                {location.pathname !== '/cart' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={totalItem} color="secondary">
                            <ShoppingCart />    
                        </Badge> 
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    </>
  )
} 
export default Navbar