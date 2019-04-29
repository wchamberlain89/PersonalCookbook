import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';

import SideNav from './SideNav/SideNav';
import Welcome from './Main/Welcome/Welcome';
import CollectionRecipeDisplay from './Main/CollectionDisplay/CollectionRecipeDisplay';
import RecipeDisplay from './Main/RecipeDisplay/RecipeDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes : [
        {name: 'Praline Brookies', img: 'img1.jpg'},
        {name: 'PB & J', img: 'img2.jpg'},
        {name: 'Cauliflower Pizza Dough', img: 'img3.jpg'}
      ]
    };
    this.HandleAddingNewRecipe = this.HandleAddingNewRecipe.bind(this);
  }

  HandleAddingNewRecipe(recipe) {
    const recipes = this.state.recipes.slice();
    recipes.push(recipe);
    this.setState({recipes : recipes});
  }

  render(){
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
            .mainView {
              width: 85vw;
              margin-left: 15vw;
              height: 100vh;
            }
          `}
          </style>

        <SideNav/>
      <div className="mainView">
          <Switch>
          <Route path="/collection/:id"
            render={ (props) =>
              <CollectionRecipeDisplay
                recipes={this.state.recipes}
                onAddingRecipe={this.HandleAddingNewRecipe}
                />
            }/>
          <Route path="/recipe/:id" component={RecipeDisplay}/>
          <Route exact path='/' component={Welcome}/>
          <Route component={Error404}/>
          </Switch>
        </div>
      </div>
    );
  }
}


export default App;
