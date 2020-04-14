export const TOGGLE_FAVOURITE = 'TOGGLE_FAVOURITE';

export const toggleFavourite = (id) => {
    return { type: TOGGLE_FAVOURITE, mealId: id};
}

export const TOGGLE_SAVE_FILTER = 'TOGGLE_SAVE_FILTER';

export const toggleSaveFilter = (filters) => {
    return {type: TOGGLE_SAVE_FILTER, filterList: filters};
}