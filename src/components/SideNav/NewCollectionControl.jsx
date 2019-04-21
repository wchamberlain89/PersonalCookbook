import React from 'react';
import CollectionsAddButton from './CollectionsAddButton';

class NewCollectionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
  }

  handleClick() {
    console.log("soon we will swap to a form");
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        <CollectionsAddButton/>
      </div>
    )
  }
}

export default NewCollectionControl;
