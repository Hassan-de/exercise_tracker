
import {
  FETCH_ACTIVITY,
  SET_ACTIVITY,
  UPDATE_ACTIVITY,
  DELETE_ACTIVITY,
} from "./type";



export default (state = [], { type, payload }) => {
  switch (type) {
    case SET_ACTIVITY:
      return payload;

      case "DELETE_TODO":
        return state.filter((item, index) => index !== payload.index);
    default:
      return state;
  }
};
