import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// previous code if any

const App = () => {
  const [loading, setLoading] = useState(true);
  // previous code if any

  useEffect(() => {
    initializeLogger();
    setAuthHeaders(setLoading);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/about" render={() => <div>About</div>} />
      </Switch>
    </Router>
  );

  // previous code without changes
};

// import React, { useEffect, useState } from "react";
// import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

// const App = () => {
//   const [loading, setLoading] = useState(true);

//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" render={() => <div>Home</div>} />
//         <Route exact path="/about" render={() => <div>About</div>} />
//       </Switch>
//     </Router>
//   );
// };

// export default App;
