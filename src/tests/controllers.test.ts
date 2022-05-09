import { checkApprovalStatus } from '../controllers'
import { CheckApprovalRequest, AddressType } from '../generated/resolvers-types'

const otherdeedCollection = '0x34d85c9CDeB23FA97cb08333b511ac86E1C4E258'
const alice = '0x48AAbAb1e5224540dfD31E48DeD0Ba6725185C93'
const dingalingEth = '0x54BE3a794282C030b15E43aE2bB182E14c409C5e'
const batsuEns = 'batsu.eth'

describe('checkApprovalStatus', () => {
  it('Should be approved from alice', async function () {
    const request: CheckApprovalRequest = {
      address: {
        type: AddressType.Eoa,
        value: alice,
      },
      collection: otherdeedCollection,
    }
    const response = await checkApprovalStatus(request)
    expect(response).toBe(true)
  }, 10000)

  it('Should be approved from batsu.eth', async function () {
    const request: CheckApprovalRequest = {
      address: {
        type: AddressType.Ens,
        value: batsuEns,
      },
      collection: otherdeedCollection,
    }
    expect(await checkApprovalStatus(request)).toBe(true)
  }, 10000)

  it('Should not be approved from dingaling.eth', async function () {
    const request: CheckApprovalRequest = {
      address: {
        type: AddressType.Eoa,
        value: dingalingEth,
      },
      collection: otherdeedCollection,
    }
    expect(await checkApprovalStatus(request)).toBe(false)
    request.address = {
      type: AddressType.Ens,
      value: 'dingaling.eth',
    }
    expect(await checkApprovalStatus(request)).toBe(false)
  }, 10000)

  it('Should occur error for invalid address', async function () {
    expect.assertions(1)
    try {
      const request: CheckApprovalRequest = {
        address: {
          type: AddressType.Eoa,
          value: '0000',
        },
        collection: otherdeedCollection,
      }
      await checkApprovalStatus(request)
    } catch (e) {
      expect(e).not.toBe(null)
    }
  }, 10000)
})
