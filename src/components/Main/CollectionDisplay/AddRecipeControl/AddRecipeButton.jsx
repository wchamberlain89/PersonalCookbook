import React from 'react';

function AddRecipeButton() {
  const buttonStyles = {
    minWidth: '50px',
    width: '5vw',

    minHeight: '50px',
    height: '5vw',

    position: 'absolute',
    right: '5%',
    bottom: '5%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: '50%',
    boxShadow: '2px 3px 12px 3px rgba(0,0,0,0.25)',
    backgroundColor: 'red',
}

return(
  <div style={buttonStyles}>
    <img src={require(`../../../../assets/imgs/add.png`)}/>
  </div>
)

}

export default AddRecipeButton;
