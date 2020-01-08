/* eslint-disable @typescript-eslint/no-explicit-any */
import functionActionHandler from './actionHandlers/functionActionHandler'
import arrayActionHandler from './actionHandlers/arrayActionHandler'
import { TReduxSoldierMiddleware } from '../@types'

const reduxSoldierMiddleware: TReduxSoldierMiddleware = store => {
  return (next: any) => (action: any): any => {
    if (typeof action === 'function')
      functionActionHandler({ store, next, action })
    if (Array.isArray(action)) arrayActionHandler({ store, next, action })
    return next(action)
  }
}

export default reduxSoldierMiddleware
