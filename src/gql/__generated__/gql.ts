/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation SaveForm($input: SaveFormInput!) {\n  saveForm(input: $input) {\n    form {\n      id\n      slug\n      name\n      description\n      isPublished\n      isArchived\n      meta\n      createdByUser\n      createdByGroup\n    }\n    clientMutationId\n  }\n}": typeof types.SaveFormDocument,
    "query GetAllForms($filter: [FormFilterSetType], $order: [FormOrderSetType], $first: Int, $after: String, $offset: Int) {\n  allForms(\n    filter: $filter\n    order: $order\n    first: $first\n    after: $after\n    offset: $offset\n  ) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n    edges {\n      node {\n        id\n        slug\n        name\n        description\n        isPublished\n        isArchived\n        meta\n        createdByUser\n        createdByGroup\n      }\n    }\n  }\n}": typeof types.GetAllFormsDocument,
};
const documents: Documents = {
    "mutation SaveForm($input: SaveFormInput!) {\n  saveForm(input: $input) {\n    form {\n      id\n      slug\n      name\n      description\n      isPublished\n      isArchived\n      meta\n      createdByUser\n      createdByGroup\n    }\n    clientMutationId\n  }\n}": types.SaveFormDocument,
    "query GetAllForms($filter: [FormFilterSetType], $order: [FormOrderSetType], $first: Int, $after: String, $offset: Int) {\n  allForms(\n    filter: $filter\n    order: $order\n    first: $first\n    after: $after\n    offset: $offset\n  ) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n    edges {\n      node {\n        id\n        slug\n        name\n        description\n        isPublished\n        isArchived\n        meta\n        createdByUser\n        createdByGroup\n      }\n    }\n  }\n}": types.GetAllFormsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation SaveForm($input: SaveFormInput!) {\n  saveForm(input: $input) {\n    form {\n      id\n      slug\n      name\n      description\n      isPublished\n      isArchived\n      meta\n      createdByUser\n      createdByGroup\n    }\n    clientMutationId\n  }\n}"): (typeof documents)["mutation SaveForm($input: SaveFormInput!) {\n  saveForm(input: $input) {\n    form {\n      id\n      slug\n      name\n      description\n      isPublished\n      isArchived\n      meta\n      createdByUser\n      createdByGroup\n    }\n    clientMutationId\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllForms($filter: [FormFilterSetType], $order: [FormOrderSetType], $first: Int, $after: String, $offset: Int) {\n  allForms(\n    filter: $filter\n    order: $order\n    first: $first\n    after: $after\n    offset: $offset\n  ) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n    edges {\n      node {\n        id\n        slug\n        name\n        description\n        isPublished\n        isArchived\n        meta\n        createdByUser\n        createdByGroup\n      }\n    }\n  }\n}"): (typeof documents)["query GetAllForms($filter: [FormFilterSetType], $order: [FormOrderSetType], $first: Int, $after: String, $offset: Int) {\n  allForms(\n    filter: $filter\n    order: $order\n    first: $first\n    after: $after\n    offset: $offset\n  ) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    totalCount\n    edges {\n      node {\n        id\n        slug\n        name\n        description\n        isPublished\n        isArchived\n        meta\n        createdByUser\n        createdByGroup\n      }\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;