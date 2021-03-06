import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewCollectionForm (props) {

  let _name = null;

  function handleNewCollectionSubmit(event) {
    event.preventDefault();
    props.onNewCollection({name: _name.value, id: v4()});
    props.onResetVisibilty();
    _name.value = '';
  }

  return (
    <form onSubmit={handleNewCollectionSubmit}>
      <input type="text" placeholder='Collection Name...' ref={(input) => {_name = input;}}/>
      <button type="submit">
        add
      </button>
    </form>
  );
}

NewCollectionForm.propTypes = {
  onNewCollection: PropTypes.func
};

export default NewCollectionForm;
