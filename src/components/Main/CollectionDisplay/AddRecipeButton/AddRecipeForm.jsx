import React from 'react';
import PropTypes from 'prop-types';

function AddRecipeForm(props) {
  let _name = null;

  function handleFormSubmit() {
    props.onAddingRecipe({name: _name.value, img: 'img1.jpg'});
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <input type="text" ref={(input) => _name = input}/>
      <button type="submit">Add New Recipe</button>
    </form>
  );
}

AddRecipeForm.propTypes = {
  onAddingRecipe: PropTypes.func
};

export default AddRecipeForm;
