import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, TOGGLE_SAVE_FILTER } from '../actions/meals-action';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
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

            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if(appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }

                return true;
            })

            return {...state, filteredMeals: updatedFilteredMeals}

        default:
            return state;
    }
}

export default mealsReducer;