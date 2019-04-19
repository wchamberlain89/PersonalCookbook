import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';

function App(){
  return (
    <div>

      <Switch>
        <Route component={Error404}/>
      </Switch>

    </div>
  );
}

export default App;
