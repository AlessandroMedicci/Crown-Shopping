import createAction from "../../Utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
