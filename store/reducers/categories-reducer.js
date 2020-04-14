import { GET_CATEGORIES } from "../actions/categories-action";
import Category from "../../models/Category";

const categoriesReducer = (state, action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return {categories: action.categories};
        default:
            return new Category();
    }

}

export default categoriesReducer;