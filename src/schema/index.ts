import { gql } from 'apollo-server-core'

export const schema = gql`
  input AddressRequest {
    eoa: String
    ens: String
  }

  type Mutation {
    validateAddressRequest(request: AddressRequest): Boolean
  }
`
