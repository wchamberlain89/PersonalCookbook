import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import SideNav from './SideNav/SideNav';
import Welcome from './Main/Welcome/Welcome';
import CollectionViewer from './Main/CollectionViewer/CollectionViewer';

class App extends React.Component {
  render() {
    return (
    <div style={{display: 'flex'}}>
      <style jsx global>
      {`
        * {
          @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700');
          font-family: Nunito;
          box-sizing : border-box;
          margin: 0;
          padding: 0;
          font-size: 14px;
          font-weight: 300;
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
  }

  export default App;
