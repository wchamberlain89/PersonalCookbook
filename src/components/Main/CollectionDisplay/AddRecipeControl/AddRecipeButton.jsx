import React from 'react';
import AddRecipeForm from './AddRecipeForm';
import PropTypes from 'prop-types';

class AddRecipeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded : false
    }
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({isExpanded : !this.state.isExpanded});
  }

  render() {
    const form = this.state.isExpanded ? <AddRecipeForm onAddingRecipe={this.props.onAddingRecipe}/> : null;

    return(
      <div
      onClick={!this.state.isExpanded ? this.onClick : null}
      className={this.state.isExpanded ? 'isExpanded' : null}>

        {/*Display for Form*/}
        {form}

        <img src={require(`../../../../assets/imgs/add.png`)}
          onClick={this.state.isExpanded ? this.onClick : null}
          className={this.state.isExpanded ? 'isExpanded' : null}
        />

        <style jsx>
        {`
          div {
            min-width: 50px;
            width: 5vw;

            min-height: 50px;
            height: 5vw;

            position: fixed;
            right: 5%;
            bottom: 5%;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            box-shadow: 2px 3px 12px 3px rgba(0,0,0,0.25);
            background-color: red;

            transition: .6s;
          }

          img {
            transition-delay: 2s;
            transition: 1s;
          }

          div.isExpanded {
            width: 100%;
            height: 100%;

            border-radius: 0;

            right: 0;
            bottom: 0;
            z-index: 100;

            box-shadow: none;
          }

          img.isExpanded {
            position: fixed;
            top: 2.5%;
            right: 2.5%;
            transform: rotate(495deg);
          }
          `}
          </style>
      </div>
    )
  }
}

AddRecipeButton.propTypes = {
  onAddingRecipe : PropTypes.func
}

export default AddRecipeButton;
