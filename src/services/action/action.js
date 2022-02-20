import { ADD_TO_LIST } from "../Constant";
import { EDIT } from "../Constant";
import { DELETE } from "../Constant";
export const addToLIST = (data) => {
  return {
    type: ADD_TO_LIST,
    data,
  };
};
export const delet = (id) => {
  console.log("action", id);
  return {
    type: DELETE,
    data: id,
  };
};
export const edit = (data) => {
  console.log("action", data);
  return {
    type: EDIT,
    data: data,
  };
};
