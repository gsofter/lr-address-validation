import { ethers } from 'ethers'

export const getProvider = (providerUrl: string) =>
  new ethers.providers.StaticJsonRpcProvider(providerUrl || 'https://cloudflare-eth.com/')
