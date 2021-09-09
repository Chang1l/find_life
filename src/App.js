import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ResultPage from "./pages/ResultPage";
import WarningPage from "./pages/WarningPage";

function App({ props }) {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => <LandingPage props={props} />}
      ></Route>
      <Route
        path="/result/"
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>

      <Route path="/*">
        <WarningPage />
      </Route>
    </Switch>
  );
}

export default App;
