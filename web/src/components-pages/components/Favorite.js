import React from "react";
import { FavoriteRounded } from "@material-ui/icons";
import { Card, CardContent, CardMedia, Grid, IconButton, Link, Typography } from "@material-ui/core";
import Star from "./Stars";
import { changeFavoriteSelected, updateFavorites } from "../../store/userContext/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "../../styles/components/favoriteStyles";
import { REMOVE_FAVORI } from "../../utils/constants";

export default function Favorite({ favorite }) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user } = useSelector(state => state.user);

  return (
    <Grid item md={12}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={favorite.photo}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="space-between"
            >
              <Typography component="h5" variant="h5">
                {favorite.name}
              </Typography>
              <IconButton
                aria-label="share"
                component="span"
                onClick={() => {
                  dispatch(updateFavorites(user.id, favorite, REMOVE_FAVORI));
                }}
              >
                <FavoriteRounded style={{ color: "crimson" }}/>
              </IconButton>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Star/>
            </Grid>
            <Grid container direction="row" alignItems="center">
              <Typography variant="body2">
                {favorite.description}
              </Typography>
            </Grid>
            <Grid container direction="row" justify="flex-end">
              <Link
                component="button"
                variant="body2"
                className='detailsButtonFavorite'
                onClick={() => {
                  dispatch(changeFavoriteSelected(favorite));
                }}
              >
                Details
              </Link>
            </Grid>
          </CardContent>
        </div>
      </Card>
    </Grid>
  );
}