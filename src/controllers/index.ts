import { ethers } from 'ethers'
import erc721Abi from '../utils/erc721abi.json'
import { getProvider } from '../utils/provider'
import { ICheckApprovalRequest } from '../utils/types'
import { TRANSFER_MANAGER_ERC721_ADDRESS } from '../utils/constants'

export const checkApprovalStatus = async (request: ICheckApprovalRequest) => {
  const nftCollectionContract = new ethers.Contract(request.collection, erc721Abi, getProvider(request.rpcGateway))

  return await nftCollectionContract.isApprovedForAll(request.eoa, TRANSFER_MANAGER_ERC721_ADDRESS)
}
