import { ethers } from 'ethers'
import erc721Abi from '../utils/erc721abi.json'
import { getProvider } from '../utils/provider'
import { TRANSFER_MANAGER_ERC721_ADDRESS } from '../utils/constants'
import { CheckApprovalRequest, AddressType } from '../generated/resolvers-types'

export const checkApprovalStatus = async (request: CheckApprovalRequest) => {
  const provider = getProvider(request.rpcGateway)
  const nftCollectionContract = new ethers.Contract(request.collection, erc721Abi, provider)

  if (request.address.type === AddressType.Eoa)
    return await nftCollectionContract.isApprovedForAll(request.address.value, TRANSFER_MANAGER_ERC721_ADDRESS)

  // convert ens domain to actual eth address
  const ethAddress = await provider.resolveName(request.address.value)
  return await nftCollectionContract.isApprovedForAll(ethAddress, TRANSFER_MANAGER_ERC721_ADDRESS)
}
