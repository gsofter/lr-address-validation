import * as Service from '../controllers'
import { Resolvers } from '../generated/resolvers-types'

export const resolvers: Resolvers = {
  Query: {
    greeting() {
      return 'Hello'
    },
  },

  Mutation: {
    checkApprovalStatus(root, args) {
      console.log('Mutation.checkApprovalStatus => ', args)
      return Service.checkApprovalStatus(args.request)
    },
  },
}
