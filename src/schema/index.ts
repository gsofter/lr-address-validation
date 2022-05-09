import { gql } from 'apollo-server-core'

export const schema = gql`
  input AddressRequest {
    eoa: String
    ens: String
    collection: String
    rpcGateway: String
  }

  type Query {
    greeting: String
  }

  type Mutation {
    checkApprovalStatus(request: AddressRequest): Boolean
  }
`
