/* eslint-disable @typescript-eslint/no-explicit-any */
import { TArrayActionHandler } from '../../@types'
import functionActionHandler from './functionActionHandler'

const arrayActionHandler: TArrayActionHandler = ({ store, action, next }) => {
  Array(action).forEach((rawAction: any): any => {
    if (typeof rawAction === 'function')
      functionActionHandler({ store, action: rawAction, next })
  })
}

export default arrayActionHandler
