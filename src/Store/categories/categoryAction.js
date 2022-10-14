import createAction from "../../Utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);
