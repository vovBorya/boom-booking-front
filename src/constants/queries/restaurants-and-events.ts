import gql from 'graphql-tag'

export const RESTAURANTS_AND_EVENTS = gql`
    query ($restaurantSearchOptions: RestaurantSearchOptionsInput!,
        $eventSearchOptions: EventSearchOptionsInput!){
        restaurants(searchOptions: $restaurantSearchOptions) {
            id
            name
            categories {
                title
            }
        }
        events(searchOptions: $eventSearchOptions) {
            id
            name
            restaurant {
                name
            }
        }
    }
`;