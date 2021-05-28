import { gql } from "@apollo/client";

const queries = {
  getLeaderBoardBatting: gql`
    query LeaderboardBatting($input: FilterLeaderboardInput!) {
      leaderboard_batting(input: $input) {
        leaderboard_batting {
          batter_name
          exit_velocity
          launch_angle
          distance
          batter_datraks_id
          age
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
      }
    }
  `,
  getLeaderboardPitching: gql`
    query LeaderboardPitching($input: FilterLeaderboardInput!) {
      leaderboard_pitching(input: $input) {
        leaderboard_pitching {
          pitcher_name
          pitch_type
          velocity
          spin_rate
          vertical_break
          horizontal_break
          pitcher_datraks_id
          age
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
      }
    }
  `,
};

export default queries;
