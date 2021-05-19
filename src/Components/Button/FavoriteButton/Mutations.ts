import { gql } from "@apollo/client";

const mutations = {
  updateFavorite: gql`
    mutation UpdateFavoriteProfile($form: UpdateFavoriteProfileInput!) {
      update_favorite_profile(input: $form) {
        favorite
      }
    }
  `,
};

export default mutations;
