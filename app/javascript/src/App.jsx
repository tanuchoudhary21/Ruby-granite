import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";

import CreateTask from "components/Tasks/CreateTask";
import Dashboard from "./components/Dashboard";
import NavBar from "./components/NavBar";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={NavBar} />
        <Route exact path="/about" render={() => <div>About</div>} />
        <Route exact path="/tasks/create" component={CreateTask} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
