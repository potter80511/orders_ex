import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TestContainer from 'src/features/test_feature/TestContainer'
import IndexContainer from 'src/features/IndexContainer'

export class AppPath {
  static get index() {
    return '/';
  }

  static get testFeature() {
    return '/test_feature';
  }
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">index</Link>
        <Link to="/test_feature">test feature</Link>
      </header>
      <Switch>
        <Route exact={true} path={AppPath.index} component={IndexContainer} />
        <Route
          exact={true}
          path={AppPath.testFeature}
          component={TestContainer}
        />
      </Switch>
    </div>
  );
}

export default App;
