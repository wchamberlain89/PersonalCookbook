import React from 'react';
import CollectionsAddButton from './CollectionsAddButton';
import NewCollectionForm from './NewCollectionForm';
import PropTypes from 'prop-types';

class NewCollectionControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisible: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleResetVisibilty = this.handleResetVisibilty.bind(this);
  }

  handleClick(props) {
    this.setState({formVisible: true});
  }

  handleResetVisibilty(props) {
    this.setState({formVisible: false});
  }

  render(){
    let content = null;
    if(this.state.formVisible) {
      content = <NewCollectionForm onNewCollection={this.props.onNewCollection} onResetVisibilty={this.handleResetVisibilty}/>;
    } else {
      content = <CollectionsAddButton/>;
    }
    return(
      <div onClick={this.handleClick}>
        {content}
      </div>
    );
  }
}

NewCollectionControl.propTypes = {
  onNewCollection : PropTypes.func
};

export default NewCollectionControl;
