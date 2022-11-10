import type { ApiContext } from 'types'
import { fetcher } from 'utils'

export type PurchaseParams = {
  productId: number
}

const purchase = async (
  context: ApiContext,
  params: PurchasePramas,
): Promise<{ message: string }> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/purchases`, {
    method: 'POST',
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
    body: JSON.stringify(params),
  })
}

export default purchase
