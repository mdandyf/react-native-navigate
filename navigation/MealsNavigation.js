import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Color from '../constants/Color';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
},
    {
        defaultNavigationOptions: {
            headerTitle: "The Meals",
            headerStyle: {
                backgroundColor: (Platform.OS === 'android') ? Color.header : 'white'
            },
            headerTintColor: (Platform.OS === 'ios') ? Color.header : 'white'
        }
    })

export default createAppContainer(MealsNavigator);