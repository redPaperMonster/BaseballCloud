import { gql } from "@apollo/client";

const mutations = {
  updateUser: gql`
    mutation UpdateProfile($form: UpdateProfileInput!) {
      update_profile(input: $form) {
        profile {
          id
          first_name
          last_name
          position
          position2
          avatar
          throws_hand
          bats_hand
          biography
          school_year
          feet
          inches
          weight
          age
          recent_events {
            id
            event_type
            event_name
            date
            recent_avatars {
              id
              first_name
              last_name
              avatar
            }
          }
          school {
            id
            name
          }
          teams {
            id
            name
          }
          facilities {
            id
            email
            u_name
          }
        }
      }
    }
  `,
  updateFavorite: gql`
    mutation UpdateFavoriteProfile($form: UpdateFavoriteProfileInput!) {
      update_favorite_profile(input: $form) {
        favorite
      }
    }
  `,
};

export default mutations;
