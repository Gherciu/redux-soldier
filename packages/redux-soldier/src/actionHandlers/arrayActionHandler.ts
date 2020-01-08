/* eslint-disable @typescript-eslint/no-explicit-any */
import { TArrayActionHandler } from '../../@types'
import functionActionHandler from './functionActionHandler'

const arrayActionHandler: TArrayActionHandler = ({ store, action }) => {
  return Array(action).map((rawAction: any): any => {
    if (typeof rawAction === 'function')
      return functionActionHandler({ store, action: rawAction })
    return rawAction
  })
}

export default arrayActionHandler
