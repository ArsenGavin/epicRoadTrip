import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import imageHome from "../../assets/nature.svg";
import {
  WbSunnyRounded,
  HotelRounded,
  TrainRounded,
  RestaurantRounded,
  LocalBarRounded,
  MusicNote,
} from "@material-ui/icons";
import Place from "../components/Place";
import InputCity from "../components/InputCity";
import Navbar from "../components/Navbar";
import { TOP_CITY_LIST } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../misc/Loading";
import Error from "../misc/Error";
import {
  getResearch,
  updateDepartureArrival,
  updateStep,
} from "../../store/roadtripContext/roadtripSlice";
import { useHistory } from "react-router-dom";
import { useStyles } from "../../styles/pages/homeStyles";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";


export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSelected, setSelected] = useState(0);
  const { research, error, loading } = useSelector((state) => state.roadtrip);
  const { t } = useTranslation();

  let listCategory = [
    { value: 1, text: t("Home.Enjoy"), component: WbSunnyRounded },
    { value: 2, text: t("Home.Sleep"), component: HotelRounded },
    { value: 3, text: t("Home.Travel"), component: TrainRounded },
    { value: 4, text: t("Home.Eat"), component: RestaurantRounded },
    { value: 5, text: t("Home.Drink"), component: LocalBarRounded },
  ];

  useEffect(() => {
    dispatch(getResearch());
  }, []);

  const rounded = (value) => {
    setSelected(value);
  };

  const handleScroll = () => {
    window.scroll(0, 0);
  };

  const handleRoadTrip = (roadtrip) => {
    if (roadtrip.name === "Paris") {
      dispatch(updateDepartureArrival(roadtrip, TOP_CITY_LIST[1]));
      dispatch(updateStep(roadtrip));
      dispatch(updateStep(TOP_CITY_LIST[1]));
    }
    if (roadtrip.name !== "Paris") {
      dispatch(updateDepartureArrival(roadtrip, TOP_CITY_LIST[0]));
      dispatch(updateStep(roadtrip));
      dispatch(updateStep(TOP_CITY_LIST[0]));
    }
    history.push("/roadtripinit");
  };

  if (loading) return <Loading/>;
  if (error) return <Error/>;

  return (
    <>
      <Navbar/>
      <Container maxWidth="lg">
        <div>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} container justify="center">
              <img src={imageHome} alt="Nature" className={classes.image}/>
            </Grid>
            <Grid item container direction="row" xs={12} sm={6}>
              <Grid
                item
                xs={12}
                xl={10}
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
              >
                <Typography variant="h5" gutterBottom>
                  {t("Home.New_Road_Trip")}
                </Typography>
                <InputCity id="inputcity"/>
                <Grid container>
                  {listCategory.map((category) => (
                    <Grid
                      item
                      xs={2}
                      container
                      key={category.value}
                      onClick={() => rounded(category.value)}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className={[
                        classes.rounded,
                        isSelected === category.value &&
                        classes.categorySelected,
                      ].join(" ")}
                    >
                      <category.component fontSize="small"/>
                      <Typography variant="body2">{category.text}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              {research && research.length > 0 &&
              <Grid container>
                <Typography variant="h5">{t("Home.MyLatestResearch")}</Typography>
                <Grid container>
                  {research.map((search, i) => (
                    <Grid
                      key={i}
                      xs={3}
                      md={2}
                      item
                      container
                      direction="column"
                      justify="center"
                      alignItems="center"
                      className={[
                        classes.rounded,
                        classes.latestResearch,
                      ].join(" ")}
                      onClick={() => handleRoadTrip(search)}
                    >
                      <Typography variant="body2">{search.name}</Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>}
            </Grid>

            <Grid container className={classes.secondBlockHome}>
              <Typography variant="h4" gutterBottom>
                {t("Home.TheMostVisited")}
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
              >
                {TOP_CITY_LIST.map((city, i) => (
                  <Place item md={3} city={city} key={i}/>
                ))}
              </Grid>
            </Grid>
            <Grid container className={classes.secondBlockHome}>
              <Typography variant="h4" gutterBottom>
                The latest videos from our users
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                <Grid item xs={12} md={4} sm={4}>
                  <iframe
                    width="320"
                    height="180"
                    src="https://www.youtube.com/embed/4NRuiUk1dxQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Grid>
                <Grid item xs={12} md={4} sm={4}>
                  <iframe
                    width="320"
                    height="180"
                    src="https://www.youtube.com/embed/pnTPqRXQhvU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Grid>
                <Grid item xs={12} md={4} sm={4}>
                  <iframe
                    width="320"
                    height="180"
                    src="https://www.youtube.com/embed/_45H1ufLI98"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container className={classes.thirdBlockHome}>
              <Grid
                item
                container
                sm={12}
                md={6}
                className={classes.blockBestsPlaces}
              >
                <Typography variant="subtitle2">
                  {t("Home.TheBestPlaces")}
                </Typography>
                <Typography variant="body2">
                  <MusicNote className={classes.mainColor}/> Road trippin&apos;
                  with my two favorite allies, fully loaded we got snacks and
                  supplies <MusicNote className={classes.mainColor}/>
                </Typography>
                <Button
                  className={classes.mainBgColor}
                  variant="contained"
                  disableElevation
                  onClick={handleScroll}
                >
                  {t("Home.Search")}
                </Button>
              </Grid>
              <Grid item sm={12} md={6}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://picsum.photos/600/150"
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
      <Footer/>
    </>
  );
}
