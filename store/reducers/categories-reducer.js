import { GET_CATEGORIES } from "../actions/categories-action";
import { CATEGORIES } from "../../data/dummy-data";
import Category from "../../models/Category";

const initialState = {
    categories: CATEGORIES
}

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {categories: action.categories};
        default:
            return new Category();
    }

}

export default categoriesReducer;