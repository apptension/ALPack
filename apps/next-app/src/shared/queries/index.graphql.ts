import { graphql } from 'graphql/__generated/gql';

export const GET_PROFILE = graphql(`
  query getProfile($profileId: UUID!) {
    profilesCollection(filter: { id: { eq: $profileId } }) {
      edges {
        node {
          id
          full_name
          avatar_url
          stripe_customer_id
          subscription
        }
      }
    }
  }
`);

export const UPDATE_AVATAR = graphql(`
  mutation updateAvatar($input: profilesUpdateInput!) {
    updateprofilesCollection(set: $input) {
      records {
        avatar_url
      }
    }
  }
`);

export const UPDATE_FULL_NAME = graphql(`
  mutation updateProfile($input: profilesUpdateInput!) {
    updateprofilesCollection(set: $input) {
      records {
        full_name
      }
    }
  }
`);
