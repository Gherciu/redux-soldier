import { TFunctionActionHandler } from '../../@types'

const functionActionHandler: TFunctionActionHandler = ({ store, action }) => {
  return action(store.dispatch, store.getState)
}

export default functionActionHandler
