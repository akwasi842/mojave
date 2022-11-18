import React, { Suspense } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import DashBoard from "../views/DashBoard";
import Carousel from "./Carousel";
import Footer from "./Footer";
import NavBar from "./NavBar";
import routes from "./routes";
import TopBar from "./TopBar";


const DefaultLayOut = () => {
  return (
    <div>
      <div className="App">
        {/* <PreLoader /> */}
        <TopBar />
       
       <div className="container-fluid position-relative p-0">
          <NavBar />
       </div>

        <Suspense>
            <BrowserRouter>
                <Switch>
                    {routes.map((route,idx) => {
                        return route.component ? (
                            <Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                                <route.component {...props} />
                            )} />
                        ) : (null);
                    })}
                    {<Redirect from='/' to="/dashboard" />}
                </Switch>
            </BrowserRouter>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayOut;
