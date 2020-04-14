import { TOGGLE_FAVOURITE, TOGGLE_SAVE_FILTER, SAVE_MEAL_CLOUD, GET_MEALS } from '../actions/meals-action';
import Meal from '../../models/Meal';

const initialState = {
    meals: [],
    filteredMeals: [],
    favouriteMeals: [],
    currentMeal: new Meal(),
    isFiltered: false
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if (existingIndex >= 0) {
                // record does exist in the array, hence delete the existing record first and add the new one
                const updatedFavouriteMeals = [...state.favouriteMeals];
                updatedFavouriteMeals.splice(existingIndex, 1);
                return { ...state, favouriteMeals: updatedFavouriteMeals };
            } else {
                // record does not exist in the array, hence add it to the existing array
                const newFavouriteMeal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(newFavouriteMeal) };
            }
        case TOGGLE_SAVE_FILTER:
            const appliedFilters = action.filterList;
            let updatedIsFiltered= false;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }

                updatedIsFiltered= true;
                return true;
            })

            return { ...state, filteredMeals: updatedFilteredMeals, isFiltered:  updatedIsFiltered}
        case SAVE_MEAL_CLOUD:
            return { ...state, currentMeal: action.currentMeal };
        case GET_MEALS:
            return { ...state, meals: action.meals, filteredMeals: action.meals }
        default:
            return state;
    }
}

export default mealsReducer;