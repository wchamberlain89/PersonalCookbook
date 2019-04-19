import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import SideNav from './SideNav/SideNav';
import Welcome from './Main/Welcome/Welcome';
import CollectionViewer from './Main/CollectionViewer/CollectionViewer';

function App(){
  return (
    <div>
      <style jsx global>
        {`
      * {
        @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700');
        font-family: Nunito;
        box-sizing : border-box;
        margin: 0;
        padding 0;
      }
      `}
      </style>
      <SideNav/>
      <Switch>
        <Route path="/collections/viewAll" component={CollectionViewer}/>
        <Route exact path='/' component={Welcome}/>
        <Route component={Error404}/>
      </Switch>

    </div>
  );
}

export default App;
