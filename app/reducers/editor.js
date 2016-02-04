import Immutable from 'immutable';

const initialState = {
  content: null
}

export default function editor(state = Immutable.fromJS(initialState), action) {
  switch (action.type) {
    case 'OPEN_FILE':
      return state.merge({
        content: action.content
      })
      break;
    case 'EDIT_FILE':
      return state.merge({
        content: action.content
      })
      break;
    default:
      return state;
    }
}
