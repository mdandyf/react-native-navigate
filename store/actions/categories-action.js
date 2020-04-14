import Category from '../../models/Category';

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () => {
    return async dispatch => {
        try {
            // The code when the API return successfully
            const response = await fetch(
                "https://myreactnativenavigateproject.firebaseio.com/categories.json",
                {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    body: ''
                });

            if(!response.ok) {
                //console.log(response);
                throw new Error('Something went wrong!');
            }
    
            const responseData = await response.json();
            const loadedCategories = [];
    
            for (const key in responseData) {
                loadedCategories.push(new Category(responseData[key].categoryId, responseData[key].name, responseData[key].color))
            }
    
            dispatch({ type: GET_CATEGORIES, categories: loadedCategories });
        } catch(err) {
            // Send error to analytics engine
            throw err;
        }
    }
}