import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import SideNav from './SideNav/SideNav';
import Welcome from './Main/Welcome/Welcome';
import CollectionDisplay from './Main/CollectionDisplay/CollectionDisplay';
import RecipeDisplay from './Main/RecipeDisplay/RecipeDisplay';

function App() {
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
        <Route path="/collection/:id" component={CollectionDisplay}/>
        <Route path="/recipe/:id" component={RecipeDisplay}/>
        <Route exact path='/' component={Welcome}/>
        <Route component={Error404}/>
        </Switch>

    </div>
      );
    }


  export default App;
