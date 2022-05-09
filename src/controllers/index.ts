import { ethers } from 'ethers'
import erc721Abi from '../utils/erc721abi.json'
import { provider } from '../utils/provider'

import { IAddressRequest } from '../utils/types'
import { TRANSFER_MANAGER_ERC721_ADDRESS } from '../utils/constants'

export const checkApprovalStatus = async (request: IAddressRequest) => {
  const nftCollectionContract = new ethers.Contract(request.collection, erc721Abi, provider)

  return await nftCollectionContract.isApprovedForAll(request.eoa, TRANSFER_MANAGER_ERC721_ADDRESS)
}
