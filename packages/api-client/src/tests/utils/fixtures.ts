import { MockedResponse } from '@apollo/client/testing';
import { GraphQLError } from 'graphql/error';
import { DocumentNode } from 'graphql/language';

/**
 * Generates a random ID string of the specified length.
 *
 * @param length - The length of the ID string to generate.
 * @returns A random ID string.
 */
export function makeId(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

type ComposeMockedQueryResultProps = {
  data: Record<string, any>;
  variables?: Record<string, any>;
  errors?: GraphQLError[];
};

/**
 * Helper function that will compose given GraphQL query and other params like `variables`, `data` or `errors` into
 * [Apollo mock format](https://www.apollographql.com/docs/react/development-testing/testing#defining-mocked-responses)
 * that is used by `MockedProvider`. It will also wrap the `result` function with `jest.fn` which is required by
 * `waitForApolloMocks` returned from `render` and `renderHook` methods.
 *
 * @example
 * Example of confirm email mutation mock that is used in tests to mock successful query result:
 * ```ts
 *    const requestMock = composeMockedQueryResult(authConfirmUserEmailMutation, {
 *      variables: {
 *        input: { user, token },
 *      },
 *      data: {
 *        confirm: {
 *          ok: true,
 *        },
 *      },
 *    });
 * ```
 *
 * @param query
 * @param variables
 * @param data
 * @param errors
 */
export function composeMockedQueryResult<T extends DocumentNode>(
  query: T,
  { variables, data, errors }: ComposeMockedQueryResultProps
): MockedResponse {
  const result = {
    data,
    errors,
  };

  return {
    request: {
      query,
      variables,
    },
    // @ts-ignore
    result: jest.fn ? jest.fn(() => result) : () => structuredClone(result),
  };
}

type ComposeMockedListQueryResultProps = ComposeMockedQueryResultProps & {
  data: Array<any>;
  additionalData?: Record<string, any>;
};

/**
 * Maps an array of data to a edges object.
 *
 * @param data - The array of data to map.
 * @param typename - The typename of the nodes in the edges.
 * @returns The mapped edges object.
 */
export const mapEdges = (data: Array<any>, typename: string) => {
  return data.map((obj) => ({ __typename: typename, ...obj }));
};

/**
 * Helper function that composes a mocked list query result. It extends
 * `composeMockedQueryResult` functionality by mapping the `data` argument using `mapEdges`.
 *
 * @example
 *
 * ```ts
 * const data = [
 *   { id: 1, name: 'First item' },
 *   { id: 2, name: 'Second item' },
 * ];
 * const requestMock = composeMockedListQueryResult(crudDemoItemListQuery, 'allCrudDemoItems', 'CrudDemoItemType', {
 *   data,
 * });
 * ```
 *
 * @param query - The GraphQL query document.
 * @param key - The key for the main data object.
 * @param typename - The typename of the nodes in the list.
 * @param variables - The query variables.
 * @param data - The list data array.
 * @param additionalData - Optional additional data to include.
 * @returns The composed mocked list query result.
 */
export const composeMockedListQueryResult = (
  query: DocumentNode,
  key: string,
  typename: string,
  { variables, data, additionalData = {} }: ComposeMockedListQueryResultProps
): MockedResponse => {
  const composedData = {
    [key]: mapEdges(data, typename),
    ...additionalData,
  } as Record<string, any>;

  return composeMockedQueryResult(query, {
    variables,
    data: composedData,
  });
};
