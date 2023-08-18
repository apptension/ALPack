import { gql } from "@apollo/client";


export const allCrudItemsQuery = gql`
  query AllCrudItems {
    allCrudItems {
      id
      name
    }
  }
`;