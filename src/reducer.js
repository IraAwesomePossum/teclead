import { LIKE, MOVE_TO_FAV } from "./actions";

function reducer(state, action) {
  if (action.type === LIKE) {
    return {
      ...state,
      jokes: state.jokes.filter((i) => i.id !== action.payload.id),
    };
  }

  if (action.type === MOVE_TO_FAV) {
    console.log("favorite");
  }
  return state;
}
export default reducer;
