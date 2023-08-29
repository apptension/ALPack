import { gql } from '@ab/api-client';

export const userProfileQuery = gql(/* GraphQL */ `
  query UserProfile {
    me {
      id
      name
    }
  }
`);

export const updateProfileMutation = gql(/* GraphQL */ `
  mutation UpdateProfile($updateProfileData: UpdateProfileInput!) {
    updateProfile(updateProfileData: $updateProfileData) {
      id
      name
    }
  }
`);
