import { CATEGORIES_ACTION_TYPE, Category } from "./categoryTypes";
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from "../../Utils/reducer/reducer";

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuceeded = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCEEDED,
  Category[]
>;

export type FetchCategoriesFailed = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSucceeded = withMatcher(
  (categoriesArray: Category[]): FetchCategoriesSuceeded =>
    createAction(
      CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCEEDED,
      categoriesArray
    )
);

export const fetchCategoriesFailed = withMatcher(
  (error: Error): FetchCategoriesFailed =>
    createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error)
);
