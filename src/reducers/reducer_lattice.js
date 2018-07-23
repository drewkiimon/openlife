import { FETCH_PROPERTY, FETCH_ENTITY, FETCH_ASSOCIATION } from "../actions";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_PROPERTY:
      return { ...state, property: action.payload.data };
    case FETCH_ENTITY:
      return { ...state, entity: action.payload.data };
    case FETCH_ASSOCIATION:
      return { ...state, association: action.payload.data };
    default:
      return state;
  }
}
