import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE } from '../actions/meals-action';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal => meal.id === action.mealId);
            if(existingIndex >= 0) {
                // record does exist in the array, hence delete the existing record first and add the new one
                const updatedFavouriteMeals = [...state.favouriteMeals];
                updatedFavouriteMeals.splice(existingIndex, 1);
                return {...state, favouriteMeals: updatedFavouriteMeals};
            } else {
                // record does not exist in the array, hence add it to the existing array
                const newFavouriteMeal = state.meals.find(meal => meal.id === action.mealId);
                return {...state, favouriteMeals: state.favouriteMeals.concat(newFavouriteMeal)};
            }
        default:
            return state;
    }
}

export default mealsReducer;