import { combineReducers } from "redux";
import cardItems from "./reducer";

const rootreducer = combineReducers({ cardItems });
export default rootreducer;
// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./reducer";
// import { combineReducers } from "redux";
// export default configureStore({
//   reducer: combineReducers({
//     user: userSlice,
//   }),
// });
