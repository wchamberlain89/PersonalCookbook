import React from 'react';
import NewCollectionControl from './NewCollectionControl';
import CollectionsDisplay from './CollectionsDisplay';
import CollectionsListHeader from './CollectionsListHeader';

class CollectionsMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterCollectionList: []
    };
    this.handleAddingNewCollection = this.handleAddingNewCollection.bind(this);
  }

  handleAddingNewCollection(newCollection) {
    let newMasterCollectionList = this.state.masterCollectionList.slice();
    newMasterCollectionList.push(newCollection);
    this.setState({masterCollectionList: newMasterCollectionList});
  }

  render(){
    return (
      <section style={this.styles}>
        <CollectionsListHeader/>
        <NewCollectionControl onNewCollection={this.handleAddingNewCollection} />
        <CollectionsDisplay/>
      </section>
    );
  }
}
export default CollectionsMain;
