
export const removeFeature = (remove, rem) => {
    // dispatch an action here to remove an item
    return { 
        type: 'Remove_Feature',
        payload: remove,
        name: rem
     };
  };

export const buyItem = (add, ad) => {
    // dipsatch an action here to add an item
    return { 
        type: 'ADD_Feature',
        payload: add,
        name: ad
     };
  };