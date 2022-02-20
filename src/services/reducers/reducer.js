import { ADD_TO_LIST, DELETE, EDIT } from "../Constant";
const initialState = [];
console.log(initialState);
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_LIST:
      // console.warn("reducer",action)
      state = [...state, action.data];
      return state;
    default:
      return state;
    case DELETE:
      const filter = state.filter((data) => data.id !== action.data);
      state = filter;
      return state;
    case EDIT:
      const contactUpdate = state.filter((contact) =>
        contact.id === action.data.id
          ? Object.assign(contact, action.data)
          : contact
      );
      state = contactUpdate;
      return state;
  }
}
