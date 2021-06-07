import update from "immutability-helper";
import { UPDATE_CATEGORY } from "../actions/category";

const category = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CATEGORY:
      return update(state, { $merge: action.category });
    default:
      return state;
  }
};

export default category;
