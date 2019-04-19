import React from 'react';
import SideNav from './SideNav/SideNav';

import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';

function App(){
  return (
    <div>
      <style jsx global>{`
          * {
            @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700');
            font-family: Nunito;
            box-sizing : border-box;
            margin: 0;
            padding 0;
          }
      `}</style>
      <SideNav/>
      <Switch>

        <Route component={Error404}/>
      </Switch>

    </div>
  );
}

export default App;
