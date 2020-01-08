import isFunction from './isFunction'
import isArray from './isArray'
import isPromise from './isPromise'
import { ReduxSoldierUtils } from '../@types'

const reduxSoldierUtils: ReduxSoldierUtils = {
  isFunction,
  isArray,
  isPromise,
}

export { isFunction, isArray, isPromise }
export default reduxSoldierUtils
