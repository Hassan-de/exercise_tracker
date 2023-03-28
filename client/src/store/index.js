import { createStore, applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";

import activitySlice from "./activitySlice";


const rootReducer = combineReducers({
  activitySlice,
});

// const appReducer = (state, action) => {
//   if (action.type === DELETE_TODO) {
//     const newState = state.postSlice.filter(
//       (item) => item.description !== action.payload.description
//     );
//     return { ...state, postSlice: newState };
//   }
//   return rootReducer(state, action);
// };

export const store = createStore(rootReducer, applyMiddleware(thunk));
