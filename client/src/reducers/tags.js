const tags = ( state = [], action ) => {
  switch (action.type) {
    case 'TAGS':
      return action.tags
    case 'ADD_TAG':
      return [...state, action.tag]
    default: 
      return state;
  }
}

export default tags 