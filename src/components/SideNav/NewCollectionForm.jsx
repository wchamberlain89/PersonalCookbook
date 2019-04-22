import React from 'react';

function NewCollectionForm () {

  let _name = null;

  function handleNewCollectionSubmit(event) {
    event.preventDefault();
    console.log(_name);
  }

  return (
    <form onSubmit={handleNewCollectionSubmit}>
      <input type="text" placeholder='Collection Name...' ref={(input) => {_name = input;}}/>
      <button type="submit">
        add
      </button>
    </form>
  )
}

export default NewCollectionForm;
