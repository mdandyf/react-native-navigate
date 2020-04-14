import Meal from "../../models/Meal";

export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toggleFavourite = (id) => {
    return { type: TOGGLE_FAVOURITE, mealId: id};
}

export const TOGGLE_SAVE_FILTER = 'TOGGLE_SAVE_FILTER';

export const toggleSaveFilter = (filters) => {
    return {type: TOGGLE_SAVE_FILTER, filterList: filters};
}

export const SAVE_MEAL_CLOUD = 'SAVE_MEAL_CLOUD';

export const saveMealToCloud = (meal) => {
    return async dispatch => {
        try {
            // The code when the API return successfully
            const response = await fetch(
                "https://myreactnativenavigateproject.firebaseio.com/meals.json",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(meal)
                });

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            dispatch({ type: SAVE_MEAL_CLOUD, currentMeal: meal });
        } catch(err) {
            // Send error to analytics engine
            throw err;
        }
    }
}

export const GET_MEALS = 'GET_MEALS';

export const getMeals = () => {
    return async dispatch => {
        try {
            // The code when the API return successfully
            const response = await fetch(
                `https://myreactnativenavigateproject.firebaseio.com/meals.json`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    body: ''
                });

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
    
            const responseData = await response.json();
            const loadedMeals = [];

            for(const key in responseData) {
                loadedMeals.push(new Meal(key, 
                    responseData[key].categoryIds, 
                    responseData[key].title, 
                    responseData[key].afforablility, 
                    responseData[key].complexity, 
                    responseData[key].imageUrl, 
                    responseData[key].duration, 
                    responseData[key].ingredients, 
                    responseData[key].steps, 
                    responseData[key].isGlutenFree, 
                    responseData[key].isVegan, 
                    responseData[key].isVegetarian, 
                    responseData[key].isLactoseFree));
            }
            dispatch({ type: GET_MEALS, meals: loadedMeals });
        } catch(err) {
            // Send error to analytics engine
            throw err;
        }
    }
}

export const GET_MEAL_BY_ID = 'GET_MEAL_BY_ID';

export const getMealById = (id) => {
    return async dispatch => {
        try {
            // The code when the API return successfully
            const response = await fetch(
                `https://myreactnativenavigateproject.firebaseio.com/meals/${id}.json`,
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    body: ''
                });

            if(!response.ok) {
                throw new Error('Something went wrong!');
            }
    
            const responseData = await response.json();
            console.log(responseData);
            dispatch({ type: GET_MEAL_BY_ID, currentMeal: meal });
        } catch(err) {
            // Send error to analytics engine
            throw err;
        }
    }
}