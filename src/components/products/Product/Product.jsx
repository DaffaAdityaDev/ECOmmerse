import React from 'react'
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'


const Product = ( product ) => {
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image='' title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography varint="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography varint="h5">
            {product.price}
          </Typography>
        </div>
        <Typography varint="h6" color="textSecondary">{product.description}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="add to cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Product