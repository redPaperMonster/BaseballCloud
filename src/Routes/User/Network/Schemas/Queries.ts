import { gql } from "@apollo/client";

const queries = {
  userList: gql`
    query Profiles($input: FilterProfilesInput!) {
      profiles(input: $input) {
        profiles {
          id
          first_name
          last_name
          position
          position2
          school_year
          feet
          inches
          weight
          age
          events {
            id
          }
          school {
            id
            name
          }
          teams {
            id
            name
          }
          favorite
        }
        total_count
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
