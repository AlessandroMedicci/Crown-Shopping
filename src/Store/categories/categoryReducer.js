import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";

export const CATEGORY_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP:
      return { ...state, categoriesMap: payload };
    default:
      return state;
  }
};
