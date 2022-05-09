import { gql } from 'apollo-server-core'

export const schema = gql`
  input AddressRequest {
    eoa: String
    ens: String
    collection: String
    rpcGateway: String
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    checkApprovalStatus(request: AddressRequest): Boolean
  }
`
