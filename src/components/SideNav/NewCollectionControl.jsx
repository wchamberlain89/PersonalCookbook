import React from 'react';
import CollectionsAddButton from './CollectionsAddButton';

class NewCollectionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisible: !this.state.formVisible});
    console.log(`state set to ${this.state.formVisible}`);
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
