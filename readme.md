# Address Approval Status Checker

### Details:

Create a GraphQL API with TypeScript using [apollo-server-express](https://www.npmjs.com/package/apollo-server-express) that will expose a Mutation to verify if an address has approved a collection for the [TransferManagerERC721](https://docs.looksrare.org/developers/deployed-contract-addresses#transfermanagererc721) smart-contract using [ethers.js](https://www.npmjs.com/package/ethers). We expect the inputs (Ethereum addresses) to be validated / sanitized. The return of this Mutation can be as simple as a `boolean`.


### How to setup

**Install dependencies**
```sh
yarn install
```

**Generate types from graphql schema**
```sh
yarn generate
```

It will generate `src/generated/resolvers-types.ts` from `schema/schema.graphql`.


**Run on local**
```sh
yarn dev
```

To play with graphql playground, go to `localhost:4000/graphql/playground`.

**Build and start in production**
```sh
yarn build && yarn start
```

### How to test

```sh
yarn test
```
![image](https://user-images.githubusercontent.com/49583931/167432155-3ecbe397-2330-40d8-bacf-c7076575ddf2.png)

#### Test values

- For approved
```json
    "address": {
      "type": "EOA",
      "value": "0x48AAbAb1e5224540dfD31E48DeD0Ba6725185C93"
    },
    "collection": "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258"
```

```json
    "address": {
      "type": "ENS",
      "value": "batsu.eth"
    },
    "collection": "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258"
```

- For not approved status

```json
    "address": {
      "type": "ENS",
      "value": "dingaling.et"
    },
    "collection": "0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258"
```

### Graphql Playground Screenshot
![image](https://user-images.githubusercontent.com/49583931/167437630-b5026733-5908-45c9-896f-ca2d3e71d57e.png)
