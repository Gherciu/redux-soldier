/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction } from 'redux-soldier-utils'
import { TArrayActionHandler } from '../../@types'
import functionActionHandler from './functionActionHandler'

const arrayActionHandler: TArrayActionHandler = ({ store, action }) => {
  return Array(action).map((rawAction: any): any => {
    if (isFunction(rawAction))
      return functionActionHandler({ store, action: rawAction })
    return rawAction
  })
}

export default arrayActionHandler
