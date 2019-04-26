import React from 'react';

function AddRecipeButton() {
  const buttonStyles = {
    minWidth: '100px',
    maxWidth: '300px',
    width: '5vw',

    minHeight: '100px',
    maxHeight: '300px',
    height: '5vw',

    position: 'absolute',
    right: '5%',
    bottom: '5%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',
    backgroundColor: 'red',
}
return(
  <div style={buttonStyles}>
    <img src={require(`../../../../assets/imgs/add.png`)}/>
  </div>
)

}

export default AddRecipeButton;
