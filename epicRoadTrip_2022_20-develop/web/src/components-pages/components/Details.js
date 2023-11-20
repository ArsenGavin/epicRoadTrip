import React, { useEffect, useState } from "react";
import { LanguageRounded } from "@material-ui/icons";
import { Grid, Card, Link, CardMedia, Typography } from "@material-ui/core";
import Star from "./Stars";
import { useSelector } from "react-redux";
import Loading from "../misc/Loading";
import { useStyles } from "../../styles/components/detailStyles";

export default function RoadTripCard() {
  const classes = useStyles();
  const [fav, setFav] = useState(null);
  const { favoriteSelected } = useSelector(state => state.user);
  const { favoris } = useSelector(state => state.user.user);

  useEffect(() => {
    if (!favoriteSelected) {
      setFav(favoris[0]);
    }
    if (favoriteSelected) setFav(favoriteSelected);
  }, [favoriteSelected]);

  if (!fav) return <Loading/>;

  return (
    <Card className={classes.rootDetails}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="h4" className={classes.marginBottom} id="nameDetails">{fav.name}</Typography>
        <Grid container direction="row" alignItems="center" className={classes.marginBottom}>
          <LanguageRounded color="primary"/>
          <Link href={fav.website} variant="body2">{fav.website}</Link>
        </Grid>
        <CardMedia
          className={classes.primaryImage}
          image={fav.photo}
        />
        <Typography variant="body2" className={classes.marginBottom}>
          {fav.address}
        </Typography>
        <Star className={classes.marginBottom}/>
        <Typography variant="body2" className={classes.marginBottom}>
          {fav.description}
        </Typography>
      </Grid>
    </Card>
  );
}