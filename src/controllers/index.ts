import { ethers } from 'ethers'
import erc721Abi from '../utils/erc721abi.json'
import { getProvider } from '../utils/provider'
import { TRANSFER_MANAGER_ERC721_ADDRESS } from '../utils/constants'
import { CheckApprovalRequest, AddressType } from '../generated/resolvers-types'

export const checkApprovalStatus = async (request: CheckApprovalRequest) => {
  const nftCollectionContract = new ethers.Contract(request.collection, erc721Abi, getProvider(request.rpcGateway))

  if (request.address.type === AddressType.Eoa)
    return await nftCollectionContract.isApprovedForAll(request.address.value, TRANSFER_MANAGER_ERC721_ADDRESS)

  return true
}
