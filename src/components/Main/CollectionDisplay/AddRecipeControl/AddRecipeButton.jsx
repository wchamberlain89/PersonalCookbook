import React from 'react';

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
    return(
      <div
      onClick={this.onClick}
      className={this.state.isExpanded ? 'isExpanded' : null}>
        <img src={require(`../../../../assets/imgs/add.png`)}/>

        <style jsx>
        {`
          div {
            min-width: 50px;
            width: 5vw;

            min-height: 50px;
            height: 5vw;

            position: absolute;
            right: 5%;
            bottom: 5%;

            display: flex;
            justify-content: center;
            align-items: center;

            border-radius: 50%;
            box-shadow: 2px 3px 12px 3px rgba(0,0,0,0.25);
            background-color: red;

            transition: 1s;
          }

          .isExpanded {
            width: 100%;
            height: 100%;

            border-radius: 0;

            right: 0;
            bottom: 0;
            z-index: 100;
          }
          `}
          </style>
      </div>
    )
  }
}

export default AddRecipeButton;
