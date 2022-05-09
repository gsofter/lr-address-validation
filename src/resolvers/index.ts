import * as Service from '../controllers'

export const resolvers = {
  Query: {},

  Mutation: {
    validateAddressRequest(root, args) {
      console.log('Mutation: validateAddressRequest', args)
      return Service.validateAddressRequest(args.request)
    },
  },
}
