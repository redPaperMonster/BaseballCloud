import { gql } from "@apollo/client";

const queries = {
  getCurrentProfile: gql`
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
  getUserData: gql`
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
  getPlayerProfile: gql`
    query Profile($id: String!) {
      profile(id: $id) {
        id
        first_name
        last_name
        position
        position2
        school_year
        avatar
        throws_hand
        bats_hand
        biography
        feet
        inches
        weight
        age
        recent_events {
          id
          event_type
          event_name
          date
          is_pitcher
          data_rows_count
          recent_avatars {
            id
            first_name
            last_name
            avatar
          }
        }
        winsgspan
        grip_right
        grip_left
        wrist_to_elbow
        broad_jump
        grip_left
        act_score
        gpa_score
        sat_score
        batting_top_values {
          pitch_type
          distance
          launch_angle
          exit_velocity
        }
        pitching_top_values {
          velocity
          spin_rate
          pitch_type
        }
        pitcher_summary {
          velocity
          spin_rate
          horizontal_break
        }
        batter_summary {
          exit_velocity
          distance
          launch_angle
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
        favorite
        events_opened
        paid
      }
    }
  `,
  getSchools: gql`
    query Schools($search: String!) {
      schools(search: $search) {
        schools {
          id
          name
        }
      }
    }
  `,
  getTeams: gql`
    query Teams($search: String!) {
      teams(search: $search) {
        teams {
          id
          name
        }
      }
    }
  `,
  getFacilities: gql`
    query Facilities($search: String!) {
      facilities(search: $search) {
        facilities {
          id
          email
          u_name
        }
      }
    }
  `,
  getBattingSummary: gql`
    query BattingSummary($id: ID!) {
      batting_summary(id: $id) {
        top_values {
          id
          distance
          pitch_type
          launch_angle
          exit_velocity
        }
        average_values {
          id
          distance
          pitch_type
          launch_angle
          exit_velocity
        }
      }
    }
  `,
  getProfileEvents: gql`
    query ProfileEvents($input: FilterProfileEventsInput!) {
      profile_events(input: $input) {
        events {
          id
          date
          event_type
          event_name
        }
        total_count
      }
    }
  `,
};

export default queries;
