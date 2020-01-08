/* eslint-disable @typescript-eslint/no-explicit-any */
import { isArray, isFunction } from 'redux-soldier-utils'
import functionActionHandler from './actionHandlers/functionActionHandler'
import arrayActionHandler from './actionHandlers/arrayActionHandler'
import { TReduxSoldierMiddleware } from '../@types'

const reduxSoldierMiddleware: TReduxSoldierMiddleware = store => {
  return (next: any) => (action: any): any => {
    if (isFunction(action)) return functionActionHandler({ store, action })
    if (isArray(action)) return arrayActionHandler({ store, action })
    return next(action)
  }
}

export default reduxSoldierMiddleware
