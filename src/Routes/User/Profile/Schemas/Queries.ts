import { gql } from "@apollo/client";

const queries = {
  currentProfile: gql`
    {
      current_profile {
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
  `,
  userData: gql`
    {
      current_profile {
        first_name
        last_name
        avatar
        position
        position2
      }
    }
  `,
};

export default queries;
