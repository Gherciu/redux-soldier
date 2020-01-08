/* eslint-disable @typescript-eslint/no-explicit-any */
import { isFunction, isPromise } from 'redux-soldier-utils'
import { TArrayActionHandler } from '../../@types'
import functionActionHandler from './functionActionHandler'

const arrayActionHandler: TArrayActionHandler = ({ store, action }) => {
  return action
    .map((rawAction: any): any => {
      if (isFunction(rawAction)) {
        return functionActionHandler({ store, action: rawAction })
      }
      // if is default/traditional action object
      store.dispatch(rawAction)
      return rawAction
    })
    .filter(processedAction => isPromise(processedAction)) // return only thunk async actions promises
}

export default arrayActionHandler
