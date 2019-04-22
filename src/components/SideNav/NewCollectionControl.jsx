import React from 'react';
import CollectionsAddButton from './CollectionsAddButton';
import NewCollectionForm from './NewCollectionForm';

class NewCollectionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({formVisible: true});
    console.log(`state set to ${this.state.formVisible}`);
  }

  render(){
    let content = null;
    if(this.state.formVisible) {
      content = <NewCollectionForm/>
    } else {
      content = <CollectionsAddButton/>
    }
    return(
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  }
}

export default NewCollectionControl;
