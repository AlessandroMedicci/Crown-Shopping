import createAction from "../../Utils/reducer/reducer";
import { CATEGORIES_ACTION_TYPE } from "./categoryTypes";
import { getCategoriesAndDocuments } from "../../Utils/firebase/firebase";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSucceeded = (categoriesArray) =>
  createAction(
    CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCEEDED,
    categoriesArray
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesThunk = () => {
  return async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
      const categoriesArray = await getCategoriesAndDocuments("categories");

      dispatch(fetchCategoriesSucceeded(categoriesArray));
    } catch (error) {
      dispatch(fetchCategoriesFailed(error));
    }
  };
};
