//  export let editingID = {
//    editingID: null,
//  };

//export let editingID = [];


  let editingID = null;

 function getEditingID() {
    return editingID;
 }

  function setEditingID(id) {
    return editingID = id;
 }

 export{getEditingID, setEditingID};

