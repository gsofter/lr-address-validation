import * as Service from '../controllers'

export const resolvers = {
  Query: {
    books() {
      return [
        {
          title: 'Example Book',
          author: 'Jack',
        },
      ]
    },
  },
  Mutation: {
    checkApprovalStatus(root, args) {
      console.log('Mutation: checkApprovalStatus', args)
      return Service.checkApprovalStatus(args.request)
    },
  },
}
