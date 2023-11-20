import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components-pages/pages/Home";
import RoadTripInit from "../components-pages/pages/RoadTripInit";
import RoadTripDetails from "../components-pages/pages/RoadTripDetails";
import RoadTripFinish from "../components-pages/pages/RoadTripFinish";
import Loading from "../components-pages/misc/Loading";
import Login from "../components-pages/user/Login";
import Register from "../components-pages/user/Register";
import DeleteAccount from "../components-pages/user/DeleteMyAccount";
import Account from "../components-pages/user/MyAccount";
import Pay from "../components-pages/misc/Pay";
import PaymentProcess from "../components-pages/misc/PaymentProcess";
import TimelineTrip from "../components-pages/components/TimelineTrip";
import PersonalInfo from "../components-pages/user/MyPersonalInfo";
import MyRoadTrips from "../components-pages/pages/MyRoadTrips";
import MyFavorites from "../components-pages/user/MyFavorites";

export const Router = () => (
  <React.Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Switch>
        <Route eaxct path="/connexion" component={Login} />
        <Route eaxct path="/inscription" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/roadtripinit" component={RoadTripInit} />
        <Route exact path="/personalinfo" component={PersonalInfo} />
        <Route exact path="/roadtripdetails" component={RoadTripDetails} />
        <Route exact path="/roadtripfinish" component={RoadTripFinish} />
        <Route exact path="/timelinetrip" component={TimelineTrip} />
        <Route exact path="/deleteaccount" component={DeleteAccount} />
        <Route exact path="/myaccount" component={Account} />
        <Route exact path="/payment" component={Pay} />
        <Route exact path="/checkout/success" component={PaymentProcess} />
        <Route exact path="/checkout/failure" component={PaymentProcess} />
        <Route exact path="/myroadtrips" component={MyRoadTrips} />
        <Route exact path="/favorites" component={MyFavorites} />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);
