import { RECEIVE_ENTRIES, ADD_ENTRY } from "../actions";

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...actions.entries
      };
    case ADD_ENTRY:
      return {
        ...state,
        ...actions.entry
      };
    default:
      return state;
  }
}
export default entries;
