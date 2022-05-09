import * as Service from '../controllers'

export const resolvers = {
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
