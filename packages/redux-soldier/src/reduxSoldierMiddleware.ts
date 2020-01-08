/* eslint-disable @typescript-eslint/no-explicit-any */
import functionActionHandler from './actionHandlers/functionActionHandler'
import arrayActionHandler from './actionHandlers/arrayActionHandler'
import { TReduxSoldierMiddleware } from '../@types'

const reduxSoldierMiddleware: TReduxSoldierMiddleware = store => {
  return (next: any) => (action: any): any => {
    if (typeof action === 'function')
      return functionActionHandler({ store, action })
    if (Array.isArray(action)) return arrayActionHandler({ store, action })
    return next(action)
  }
}

export default reduxSoldierMiddleware
